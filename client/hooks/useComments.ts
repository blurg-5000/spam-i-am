import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import { getAllCommentsBySpamId, addComment } from '../apis/comments'

export function useCommentsById(id: number) {
  const query = useQuery({
    queryKey: ['comments'],
    queryFn: () => getAllCommentsBySpamId(id),
  })
  return {
    ...query,
  }
}

export function useAddComment() {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: addComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments'] })
    },
  })

  return mutation
}
