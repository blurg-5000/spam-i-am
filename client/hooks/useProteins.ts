import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import { getAllProteins } from '../apis/apiClient'
import { useProtein } from '../ProteinContext'

export function useProteins() {
  const isTofu = useProtein()
  const protein = isTofu ? 'tofu' : 'spams'
  const query = useQuery({
    queryKey: ['proteins', protein],
    queryFn: () => getAllProteins(protein),
    staleTime: 0, // Ensure fresh data is fetched each time
    refetchOnMount: true, // Refetch when the component mounts
  })
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
