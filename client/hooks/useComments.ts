import { useQuery } from '@tanstack/react-query'
import { getAllCommentsBySpamId } from '../apis/apiClient'

export function useCommentsById(id: number) {
  const query = useQuery({
    queryKey: ['comments', id],
    queryFn: () => getAllCommentsBySpamId(id),
  })
  return {
    ...query,
  }
}
