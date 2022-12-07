import React, { memo } from 'react'

import { Layout } from '@/components/ui/layout/Layout'
import { MovieList } from '@/components/ui/movie/movie-item/movie-list/MovieList'
import { useGetFavoriteMovies } from '@/components/ui/movie/useGetFavoriteMovies'

export const Favorites: React.FC = memo(() => {
	const { favoriteMovies, isLoading } = useGetFavoriteMovies()

	return (
		<Layout isLoading={isLoading}>
			<MovieList
				title={'Favorites'}
				isBackButton
				description={''}
				movies={favoriteMovies}
			/>
		</Layout>
	)
})
