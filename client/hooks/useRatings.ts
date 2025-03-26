import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import { addRating, getAllRatings, getAvgRatingById } from '../apis/ratings'

export function useGetAllRatings() {
  const query = useQuery({
    queryKey: ['ratings'],
    queryFn: getAllRatings,
  })
  return {
    ...query,
  }
}

export function useAvgRatingById(id: number) {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['avgRating', id],
    queryFn: () => getAvgRatingById(id),
  })

  return {
    data,
    isLoading,
    isError,
    error,
    refetch,
  }
}

export function useRatingMutation() {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: addRating,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['spams'] })
    },
  })

  return mutation
}
