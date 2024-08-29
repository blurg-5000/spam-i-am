// TODO: Create custom hook for querying the comments by spamId

// TODO: Create custom hook for adding a new comment

import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import { fetchCommentsBySpamId } from '../apis/apiClient'
