export const runtime = "edge";

import Link from "next/link";

export default function Home() {
  return (
    <section className="grid gap-2 grid-cols-6">
      <Link href="/json2ts" className="card">
        JSON to TS
      </Link>
    </section>
  )
}
