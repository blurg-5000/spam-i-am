import { useQuery } from '@tanstack/react-query'
import { getQuizResult } from '../apis/quiz'

export function useResults(category: string) {
  const query = useQuery({
    queryKey: ['results'],
    queryFn: () => getQuizResult(category),
  })
  return {
    ...query,
  }
}
