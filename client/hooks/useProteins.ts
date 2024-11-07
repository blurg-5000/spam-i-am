import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import { getAllProteins } from '../apis/apiClient'
import { useProtein } from '../ProteinContext'

import { useEffect } from 'react'

export function useProteins() {
  const { isTofu, toggleProtein } = useProtein()

  const protein = isTofu ? 'tofu' : 'spams'

  const query = useQuery({
    queryKey: ['proteins', protein],
    queryFn: () => getAllProteins(protein),
    staleTime: 0,
  })

  useEffect(() => {
    query.refetch() // Trigger refetch on protein toggle
  }, [protein, query])

  return query
}

export function useSpamsMutation<TData = unknown, TVariables = unknown>(
  mutationFn: MutationFunction<TData, TVariables>,
) {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['proteins'] })
    },
  })

  return mutation
}
