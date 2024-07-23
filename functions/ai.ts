export const onRequest: PagesFunction = async (ctx) => {
  const res = await fetch('https://plain-hall-20c8.joey666.workers.dev/')
  const data = await res.json()
  return Response.json(data)
}
