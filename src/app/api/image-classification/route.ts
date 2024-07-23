import type { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function POST(request: NextRequest) {
  const formData = await request.formData()
  const res = await fetch('https://rough-snowflake-d9ad.joey666.workers.dev/', {
    method: 'POST',
    body: formData,
  })
  const data = await res.json()
  return Response.json(data)
}
