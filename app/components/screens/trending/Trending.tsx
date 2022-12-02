import React, { memo } from 'react'

import { useGetMoviesByTrending } from '@/components/screens/trending/useGetMoviesByTrending'
import { Layout } from '@/components/ui/layout/Layout'
import { MovieList } from '@/components/ui/movie/movie-item/movie-list/MovieList'

export const Trending: React.FC = memo(() => {
	const { movies, isLoading } = useGetMoviesByTrending()
	return (
		<Layout isLoading={isLoading}>
			<MovieList isBackButton movies={movies} title={'Trending'} />
		</Layout>
	)
})
