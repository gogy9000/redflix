import { Ionicons } from '@expo/vector-icons'
import React, { memo } from 'react'
import { FlatList, ListRenderItem, Pressable, View } from 'react-native'

import { Description } from '@/components/ui/description/Description'
import { Header } from '@/components/ui/layout/header/Header'
import { MovieItem } from '@/components/ui/movie/movie-item/MovieItem'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import { IMovie } from '@/shared/types/movies.interface'

interface IMovieListProps {
	title: string
	description?: string
	movies?: IMovie[]
	isBackButton?: boolean
}

export const MovieList: React.FC<IMovieListProps> = memo(
	({ movies = [], title, description, isBackButton }) => {
		const { goBack } = useTypedNavigation()

		const renderItem: ListRenderItem<IMovie> = ({ item: movie, index }) => (
			<MovieItem
				rating={movie.rating}
				slug={movie.slug}
				title={movie.title}
				poster={movie.poster}
				movieId={movie._id}
				index={index}
			/>
		)
		return (
			<>
				<View className='flex-row items-center justify-between'>
					<Header title={title} className={'mb-3'} />
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
				<FlatList
					data={movies}
					keyExtractor={item => item._id}
					renderItem={renderItem}
					numColumns={2}
				/>
			</>
		)
	}
)
