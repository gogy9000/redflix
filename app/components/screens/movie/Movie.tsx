import React, { memo, useEffect, useRef } from 'react'
import { Animated, ScrollView } from 'react-native'

import { MovieBackground } from '@/components/screens/movie/MovieBackground'
import { MovieHeader } from '@/components/screens/movie/MovieHeader'
import { MovieContent } from '@/components/screens/movie/movie-content/MovieContent'
import { useMovie } from '@/components/screens/movie/useMovie'
import { Layout } from '@/components/ui/layout/Layout'

const scrollY = new Animated.Value(0)

export const Movie: React.FC = memo(() => {
	const { movie, isLoading } = useMovie()
	const scrollRef = useRef<ScrollView>(null)

	useEffect(() => () => {
		scrollRef.current?.scrollTo({ y: 0, animated: false })
		scrollY.setValue(0)
	})

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
					<MovieContent scrollRef={scrollRef} movie={movie} scrollY={scrollY} />
				</>
			) : null}
		</Layout>
	)
})
