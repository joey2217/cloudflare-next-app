'use client'

import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import useLocalStorage from '@/hooks/useLocalStorage'
import React, { useState } from 'react'
import JsonToTS from 'json-to-ts'
import { useToast } from '@/hooks/use-toast'

const Converter: React.FC = () => {
  const { toast } = useToast()

  const [input, setInput] = useLocalStorage('json2ts', '')
  const [output, setOutput] = useState('')

  const convert = () => {
    try {
      if (input) {
        const json = JSON.parse(input)
        const types = JsonToTS(json)
        setOutput(types.join('\n'))
      } else {
        toast({
          title: '请输入JSON',
          variant: 'destructive',
        })
      }
    } catch (error) {
      console.error(error)
      toast({
        title: '转换失败',
        description: '请检查输入的JSON格式是否正确',
        variant: 'destructive',
      })
    }
  }

  const copy = () => {
    navigator.clipboard
      .writeText(output)
      .then(() => {
        toast({
          title: '复制成功',
        })
      })
      .catch((err) => {
        console.error('复制失败:', err)
        toast({
          title: '复制失败',
          variant: 'destructive',
        })
      })
  }

  return (
    <div>
      <div className="grid grid-cols-2 gap-2">
        <div className="flex justify-end gap-6">
          <Button size="sm" variant="destructive" onClick={() => setInput('')}>
            清 空
          </Button>
          <Button size="sm" onClick={convert}>
            转 换
          </Button>
        </div>
        <div className="flex justify-end">
          <Button size="sm" onClick={copy}>
            复 制
          </Button>
        </div>
        <Textarea
          placeholder="输入JSON"
          className="textarea"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Textarea
          placeholder="输出"
          className="textarea"
          value={output}
          onChange={(e) => setOutput(e.target.value)}
        />
      </div>
    </div>
  )
}

export default Converter
