import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getAllSpams } from '../apis/apiClient'

export function useAbout() {
  const query = useQuery({ queryKey: ['spams'], queryFn: getAllSpams })
  return {
    ...query,
  }
}
