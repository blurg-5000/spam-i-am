import { useQuery } from '@tanstack/react-query'
import { getAvgRatingById } from '../apis/apiClient'

export function useAvgRatingById(id: number) {
  const query = useQuery({
    queryKey: ['avgRating'],
    queryFn: () => getAvgRatingById(id),
  })
  return {
    ...query,
    // Extra queries go here
  }
}
