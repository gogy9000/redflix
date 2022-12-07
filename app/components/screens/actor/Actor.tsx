import React, { memo } from 'react'

import { NotFound } from '@/components/notFound/NotFound'
import { useGetMoviesByActor } from '@/components/screens/actor/useGetMoviesByActor'
import { Layout } from '@/components/ui/layout/Layout'
import { MovieList } from '@/components/ui/movie/movie-item/movie-list/MovieList'

export const Actor: React.FC = memo(() => {
	const { actor, movies, isLoading } = useGetMoviesByActor()
	return (
		<Layout isLoading={isLoading}>
			{actor ? (
				<MovieList movies={movies} isBackButton title={actor.name} />
			) : (
				<NotFound />
			)}
		</Layout>
	)
})
