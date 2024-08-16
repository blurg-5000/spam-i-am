import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import { addRating, getAvgRatingById } from '../apis/apiClient'

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

export function useRatingMutation(
  spamId: number,
  rating: number,
  userId: number,
) {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: () => addRating(spamId, rating, userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['spams'] })
    },
  })

  return mutation
}
