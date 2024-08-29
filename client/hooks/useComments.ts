// TODO: Create custom hook for querying the comments by spamId

import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import { fetchCommentsBySpamId } from '../apis/apiClient'

export function useFetchCommentsBySpamId(spamId: number) {
  const query = useQuery({
    queryKey: ['comments', spamId],
    queryFn: () => fetchCommentsBySpamId(spamId),
  })
  return {
    ...query,
  }
}

// TODO: Create custom hook for adding a new comment
