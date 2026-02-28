import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = '2025-02-28'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
})

export const sanityFetch = async ({ query, params = {} }: { query: string; params?: Record<string, any> }) => {
  try {
    return await client.fetch(query, params)
  } catch (error) {
    console.error('Sanity fetch error:', error)
    throw error
  }
}
