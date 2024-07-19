import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="space-y-2">
      {Array.from({
        length: 20,
      }).map((_, i) => (
        <Skeleton key={i} className="h-6" />
      ))}
    </div>
  )
}
