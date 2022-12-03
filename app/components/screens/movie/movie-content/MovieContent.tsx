import { useScrollToTop } from '@react-navigation/native'
import React, { memo, useRef } from 'react'
import { Animated, ScrollView, View, useWindowDimensions } from 'react-native'

import { MovieInfo } from '@/components/screens/movie/movie-content/MovieInfo'
import { RelatedMovies } from '@/components/screens/movie/movie-content/RelatedMovies'
import { ActorsCarousel } from '@/components/screens/movie/movie-content/actors-carousel/ActorsCarousel'
import { Button } from '@/components/ui/button/Button'

import { IMovie } from '@/shared/types/movies.interface'

interface IMovieContentProps {
	movie: IMovie
	scrollY: Animated.Value
}

export const MovieContent: React.FC<IMovieContentProps> = memo(
	({ movie, scrollY }) => {
		const { height } = useWindowDimensions()
		const ref = useRef<ScrollView>(null)
		useScrollToTop(ref)
		return (
			<Animated.ScrollView
				contentContainerStyle={{
					paddingTop: height * 0.37
				}}
				showsVerticalScrollIndicator={false}
				scrollEventThrottle={16}
				onScroll={Animated.event(
					[
						{
							nativeEvent: { contentOffset: { y: scrollY } }
						}
					],
					{
						useNativeDriver: true
					}
				)}
			>
				<MovieInfo
					genres={movie.genres}
					scrollY={scrollY}
					title={movie.title}
					rating={movie.rating}
					year={movie.parameters.year}
					duration={movie.parameters.duration}
				/>
				<View className='bg-[#090909] px-6 pt-3 pb-24'>
					<Button icon={'play'} className={'mb-6'}>
						Watch movie
					</Button>
					<ActorsCarousel actors={movie.actors} />
					<RelatedMovies
						genreIds={movie.genres.map(g => g._id)}
						currentMovieId={movie._id}
					/>
				</View>
			</Animated.ScrollView>
		)
	}
)
