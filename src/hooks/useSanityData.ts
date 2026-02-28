import { sanityFetch } from '@/lib/sanity.client'
import { useQuery } from '@tanstack/react-query'

export const useSanityData = (query: string, params?: Record<string, any>) => {
  const queryKey = [query, params]

  const { data, isLoading, error } = useQuery({
    queryKey,
    queryFn: async () => {
      return await sanityFetch({ query, params })
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 10, // 10 minutes (formerly cacheTime)
  })

  return { data, isLoading, error, isError: !!error }
}
