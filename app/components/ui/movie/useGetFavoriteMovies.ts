import { useQuery } from '@tanstack/react-query'

import { useAuth } from '@/hooks/useAuth'

import { userService } from '@/services/user/user.service'

export const useGetFavoriteMovies = () => {
	const { user } = useAuth()
	const {
		data: favoriteMovies,
		isLoading,
		status
	} = useQuery(['get favorite movie'], () => userService.getFavoritesMovies(), {
		enabled: !!user
	})
	return { favoriteMovies, isLoading, status }
}
