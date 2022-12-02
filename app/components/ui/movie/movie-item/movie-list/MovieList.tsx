import { Ionicons } from '@expo/vector-icons'
import React, { memo } from 'react'
import { Pressable, ScrollView, Text, View } from 'react-native'

import { Description } from '@/components/ui/description/Description'
import { Header } from '@/components/ui/layout/header/Header'
import { MovieItem } from '@/components/ui/movie/movie-item/MovieItem'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import { IMovie } from '@/shared/types/movies.interface'

interface IMovieListProps {
	title?: string
	description?: string
	movies?: IMovie[]
	isBackButton?: boolean
}

export const MovieList: React.FC<IMovieListProps> = memo(
	({ movies = [], title, description, isBackButton }) => {
		const { goBack } = useTypedNavigation()

		return (
			<>
				<View className='flex-row items-center justify-between'>
					{!!title ? <Header title={title} className={'mb-3'} /> : null}
					{isBackButton && (
						<Pressable className={'mr-3 '} onPress={goBack}>
							<Ionicons
								name='arrow-back-circle-outline'
								size={32}
								color='white'
							/>
						</Pressable>
					)}
				</View>
				{description ? <Description text={description} /> : null}

				<ScrollView showsVerticalScrollIndicator={false}>
					<View className='flex-row flex-wrap justify-between mt-5 mb-32'>
						{movies?.length ? (
							movies.map((movie, index) => (
								<MovieItem
									key={movie._id}
									rating={movie.rating}
									slug={movie.slug}
									title={movie.title}
									poster={movie.poster}
									movieId={movie._id}
									index={index}
								/>
							))
						) : (
							<Text className='text-white text-lg'>Elements not found</Text>
						)}
					</View>
				</ScrollView>
			</>
		)
	}
)
