import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useMemo } from 'react'

import { userService } from '@/services/user/user.service'

export const useAddFavoriteMovie = () => {
	const queryClient = useQueryClient()
	const { data, mutate, status } = useMutation(
		['add favorite'],
		(movieId: string) => userService.putFavoriteMovie(movieId),
		{
			async onSuccess() {
				await queryClient.invalidateQueries(['get favorite movie'])
			}
		}
	)

	return useMemo(() => ({ mutate, data, status }), [status])
}
