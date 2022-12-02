import React, { memo } from 'react'

import { NotFound } from '@/components/notFound/NotFound'
import { useGetMovieByGenre } from '@/components/screens/genre/useGetMovieByGenre'
import { Layout } from '@/components/ui/layout/Layout'
import { MovieList } from '@/components/ui/movie/movie-item/movie-list/MovieList'

export const Genre: React.FC = memo(() => {
	const { movies, genre, isLoading } = useGetMovieByGenre()
	return (
		<Layout isLoading={isLoading}>
			{genre ? (
				<MovieList
					isBackButton
					description={genre.description}
					movies={movies}
					title={genre.name || ''}
				/>
			) : (
				<NotFound />
			)}
		</Layout>
	)
})
