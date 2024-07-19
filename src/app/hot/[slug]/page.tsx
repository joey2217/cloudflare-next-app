import { cn } from '@/lib/utils'

interface Datum {
  title: string
  desc: string
  hot?: number
  url: string
  mobileUrl: string
}

interface Props {
  params: { slug: string }
}

// function numberFormat(num: number) {
//   if (num > 1000000) {
//     return (num / 10000).toFixed(0) + '万'
//   } else if (num > 100000 || num > 10000) {
//     return (num / 10000).toFixed(1) + '万'
//   } else {
//     return num
//   }
// }

export default async function Page({ params }: Props) {
  const res = await fetch(`https://api.nowhots.com/${params.slug}`, {
    next: { revalidate: 0 },
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = (await res.json()) as { code: number; data: Datum[] }
  if (data.code !== 200) {
    throw new Error('Failed to fetch data')
  }

  return (
    <div className="space-y-2">
      {data.data.map((item: Datum, index: number) => (
        <a
          key={item.url}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1"
        >
          <span
            className={cn(
              'text-sm w-6 h-6 leading-6 rounded-full text-center',
              {
                'bg-rose-500': index === 0,
                'bg-orange-500': index === 1,
                'bg-yellow-500': index === 2,
              }
            )}
          >
            {index + 1}
          </span>
          <span
            className="flex-1 truncate text-primary underline-offset-4 hover:underline"
            d-hot={item.hot}
          >
            {item.title}
          </span>
          {/* <span className="text-sm text-muted-foreground">
            {item.hot && numberFormat(item.hot)}
          </span> */}
        </a>
      ))}
    </div>
  )
}
