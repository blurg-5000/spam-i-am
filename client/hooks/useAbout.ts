import { useQuery } from '@tanstack/react-query'
import { fetchAllAboutImages, fetchAllAboutText } from '../apis/apiClient'

export function useAboutText() {
  const query = useQuery({ queryKey: ['text'], queryFn: fetchAllAboutText })
  return query
}

export function useAboutImages() {
  const query = useQuery({ queryKey: ['images'], queryFn: fetchAllAboutImages })
  return query
}
