import React, { memo, useMemo } from 'react'
import { ScrollView, Text, View } from 'react-native'

import { CountUsers } from '@/components/screens/admin/CountUsers'
import { useGetMoviesByTrending } from '@/components/screens/trending/useGetMoviesByTrending'
import { MovieItem } from '@/components/ui/movie/movie-item/MovieItem'

interface IStatisticsProps {}

export const Statistics: React.FC<IStatisticsProps> = memo(({}) => {
	const { movies } = useGetMoviesByTrending(2)

	const mappedMovieItems = useMemo(
		() =>
			movies?.map((movie, index) => (
				<View className={'mb-3'}>
					<MovieItem
						widthKef={0.35}
						key={movie._id}
						rating={movie.rating}
						slug={movie.slug}
						title={movie.title}
						poster={movie.poster}
						movieId={movie._id}
						index={index}
					/>
					<Text className={'text-white text-center mt-2 text-base'}>
						Opened {movie.countOpened} times
					</Text>
				</View>
			)),
		[movies]
	)

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<CountUsers />
			<View className='border-2 border-gray rounded-2xl  flex-row flex-wrap justify-around px-3 mt-5 mb-32'>
				<View className={' w-full items-center py-6 '}>
					<Text className={'text-white text-2xl self-center font-semibold'}>
						The most popular movies
					</Text>
				</View>
				{movies?.length ? (
					<>{mappedMovieItems}</>
				) : (
					<Text className='text-white text-lg'>Elements not found</Text>
				)}
			</View>
		</ScrollView>
	)
})
