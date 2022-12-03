import React, { memo } from 'react'
import { useWindowDimensions } from 'react-native'

import { MovieBackground } from '@/components/screens/movie/MovieBackground'
import { MovieHeader } from '@/components/screens/movie/MovieHeader'
import { MovieContent } from '@/components/screens/movie/movie-content/MovieContent'
import { useMovie } from '@/components/screens/movie/useMovie'
import { Layout } from '@/components/ui/layout/Layout'

export const Movie: React.FC = memo(() => {
	const { movie, isLoading } = useMovie()
	const { width, height } = useWindowDimensions()

	return (
		<Layout style={{ paddingTop: 0 }} isLoading={isLoading}>
			{movie ? (
				<>
					<MovieHeader
						_id={movie._id}
						rating={movie.rating}
						title={movie.title}
					/>
					<MovieBackground poster={movie.poster} />
					<MovieContent movie={movie} />
				</>
			) : null}
		</Layout>
	)
})
