import { Metadata } from 'next'
import Converter from './_components/Converter'

export const runtime = "edge";

export const metadata: Metadata = {
  title: 'JSON 2 TS-工具箱',
  description: '工具箱',
}

export default function Page({}: {}) {
  return (
    <section>
      <Converter />
    </section>
  )
}