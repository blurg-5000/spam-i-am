// TODO: Create custom hook for querying the comments by spamId

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addComment } from '../apis/apiClient'
import { AddComment } from '../../models/spam'

// TODO: Create custom hook for adding a new comment
export function useAddComment() {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: addComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['new comment'] })
    },
  })
  return mutation
}
