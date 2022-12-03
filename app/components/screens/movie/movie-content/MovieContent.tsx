import React, { memo } from 'react'
import { ScrollView, useWindowDimensions } from 'react-native'

import { MovieInfo } from '@/components/screens/movie/movie-content/MovieInfo'

import { IMovie } from '@/shared/types/movies.interface'

interface IMovieContentProps {
	movie: IMovie
}

export const MovieContent: React.FC<IMovieContentProps> = memo(({ movie }) => {
	const { height } = useWindowDimensions()
	return (
		<ScrollView
			contentContainerStyle={{
				paddingTop: height * 0.37
			}}
			showsVerticalScrollIndicator={false}
			scrollEventThrottle={16}
		>
			<MovieInfo
				genres={movie.genres}
				title={movie.title}
				rating={movie.rating}
				year={movie.parameters.year}
				duration={movie.parameters.duration}
			/>
		</ScrollView>
	)
})
