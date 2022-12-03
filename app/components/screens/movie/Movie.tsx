import React, { memo, useRef } from 'react'
import { Animated } from 'react-native'

import { MovieBackground } from '@/components/screens/movie/MovieBackground'
import { MovieHeader } from '@/components/screens/movie/MovieHeader'
import { MovieContent } from '@/components/screens/movie/movie-content/MovieContent'
import { useMovie } from '@/components/screens/movie/useMovie'
import { Layout } from '@/components/ui/layout/Layout'

export const Movie: React.FC = memo(() => {
	const { movie, isLoading } = useMovie()
	const scrollY = useRef(new Animated.Value(0)).current

	return (
		<Layout style={{ paddingTop: 0 }} isLoading={isLoading}>
			{movie ? (
				<>
					<MovieHeader
						scrollY={scrollY}
						_id={movie._id}
						rating={movie.rating}
						title={movie.title}
					/>
					<MovieBackground scrollY={scrollY} poster={movie.poster} />
					<MovieContent movie={movie} scrollY={scrollY} />
				</>
			) : null}
		</Layout>
	)
})
