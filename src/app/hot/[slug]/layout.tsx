import Link from 'next/link'
import { PropsWithChildren } from 'react'
import { Button } from '@/components/ui/button'
import { Metadata } from 'next'
import Image from 'next/image'

export const runtime = 'edge';

const cates = [
  {
    img: '/images/weibo.png',
    id: 'weibo',
    name: '微博',
  },
  {
    img: '/images/baidu.png',
    id: 'baidu',
    name: '百度',
  },
  {
    img: '/images/toutiao.png',
    id: 'toutiao',
    name: '头条',
  },
  {
    img: '/images/zhihu.png',
    id: 'zhihu',
    name: '知乎',
  },
  {
    img: '/images/douyin.png',
    id: 'douyin',
    name: '抖音',
  },
  {
    img: '/images/kuaishou.png',
    id: 'kuaishou',
    name: '快手',
  },
  {
    img: '/images/bilibili.png',
    id: 'bilibili',
    name: '哔哩哔哩',
  },
  {
    img: '/images/36kr.png',
    id: '36kr',
    name: '36氪',
  },
  {
    img: '/images/weread.png',
    id: 'weread',
    name: '微信读书',
  },
  {
    img: '/images/hupu.png',
    id: 'hupu',
    name: '虎扑',
  },
  {
    img: '/images/sspai.png',
    id: 'sspai',
    name: '少数派',
  },
]

interface Props {
  params: { slug: string }
}

export function generateMetadata({ params }: Props): Metadata {
  const current = cates.find((cate) => cate.id === params.slug)
  if (current) {
    return {
      title: `${current.name} - 热榜`,
    }
  }
  return {
    title: '热榜',
  }
}

export default function layout({ children, params }: PropsWithChildren<Props>) {
  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-0.5 md:gap-1 lg:gap-2">
        {cates.map((cate) => (
          <Button
            asChild
            key={cate.id}
            size="sm"
            variant={cate.id === params.slug ? 'secondary' : 'ghost'}
          >
            <Link href={`/hot/${cate.id}`} className="flex items-center gap-2">
              <Image src={cate.img} alt={cate.name} width={24} height={24} />
              <span>{cate.name}</span>
            </Link>
          </Button>
        ))}
      </nav>
      <section className="mt-2 p-1 md:p-3 rounded-xl border bg-card text-card-foreground shadow">
        {children}
      </section>
    </>
  )
}
