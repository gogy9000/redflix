import { useCallback, useEffect, useMemo, useState } from 'react'

import { useAddFavoriteMovie } from '@/components/ui/movie/useAddFavoriteMovie'
import { useGetFavoriteMovies } from '@/components/ui/movie/useGetFavoriteMovies'

export const useLikeMovie = (movieId: string) => {
	const [isAdded, setIsAdded] = useState(false)
	const { favoriteMovies } = useGetFavoriteMovies()
	const isAddedMovies = favoriteMovies?.some(m => m._id === movieId)
	const { mutate } = useAddFavoriteMovie()
	const addMovie = useCallback((movieId: string) => {
		if (isAddedMovies) {
			return
		}
		mutate(movieId)
	}, [])
	useEffect(() => {
		console.log('isAddedMovies', isAddedMovies)
		if (isAddedMovies) {
			setIsAdded(isAddedMovies)
		}
	}, [favoriteMovies])

	return useMemo(() => ({ addMovie, isAdded }), [isAdded])
}
