import { useCallback, useEffect, useMemo, useState } from 'react'

import { useAddFavoriteMovie } from '@/components/ui/movie/useAddFavoriteMovie'
import { useGetFavoriteMovies } from '@/components/ui/movie/useGetFavoriteMovies'

export const useLikeMovie = (movieId: string) => {
	const [isAdded, setIsAdded] = useState(false)
	const { favoriteMovies } = useGetFavoriteMovies()
	const isAddedMovies = favoriteMovies?.some(m => m._id === movieId)
	const { mutate } = useAddFavoriteMovie()
	const toggleFavorite = useCallback((movieId: string) => {
		mutate(movieId)
	}, [])
	useEffect(() => {
		if (isAddedMovies) {
			setIsAdded(isAddedMovies)
		}
	}, [favoriteMovies])

	return useMemo(() => ({ toggleFavorite, isAdded }), [isAdded])
}
