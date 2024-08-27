import { useQuery } from '@tanstack/react-query'
import { getAllQuestions } from '../apis/apiClient'

export function useQuestions() {
  const query = useQuery({
    queryKey: ['questions'],
    queryFn: getAllQuestions,
  })
  return {
    ...query,
  }
}
