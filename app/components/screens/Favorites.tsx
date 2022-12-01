import React, { memo } from 'react'

import Loader from '@/components/ui/Loader'
import { Layout } from '@/components/ui/layout/Layout'
import { MovieList } from '@/components/ui/movie/movie-item/movie-list/MovieList'
import { useGetFavoriteMovies } from '@/components/ui/movie/useGetFavoriteMovies'

export const Favorites: React.FC = memo(() => {
	const { favoriteMovies, isLoading } = useGetFavoriteMovies()
	if (isLoading) {
		return <Loader />
	}

	return (
		<Layout>
			{isLoading ? (
				<Loader />
			) : (
				<MovieList
					title={'Favorites'}
					isBackButton
					description={''}
					movies={favoriteMovies}
				/>
			)}
		</Layout>
	)
})
