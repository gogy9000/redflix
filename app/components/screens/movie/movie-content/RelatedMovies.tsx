import React, { memo } from 'react'
import {
	FlatList,
	ListRenderItem,
	Text,
	View,
	useWindowDimensions
} from 'react-native'

import { useRelatedMovies } from '@/components/screens/movie/movie-content/useRelatedMovies'
import Loader from '@/components/ui/Loader'
import { MovieItem } from '@/components/ui/movie/movie-item/MovieItem'

import { IGenre } from '@/shared/types/gengre.interface'
import { IMovie } from '@/shared/types/movies.interface'

interface IRelatedMoviesProps {
	genreIds: IGenre['_id'][]
	currentMovieId: string
}

export const RelatedMovies: React.FC<IRelatedMoviesProps> = memo(
	({ currentMovieId, genreIds }) => {
		const { movies, isLoading } = useRelatedMovies(genreIds, currentMovieId)
		const { width } = useWindowDimensions()
		const renderItem: ListRenderItem<IMovie> = ({ item, index }) => (
			<MovieItem
				poster={item.poster}
				movieId={item._id}
				title={item.title}
				slug={item.slug}
				rating={item.rating}
				index={index}
			/>
		)
		return (
			<View className='my-8'>
				<View className={'flex-row'}>
					<Text className='text-white text-2xl font-semibold mb-5'>
						Related movies
					</Text>
					{isLoading ? <Loader /> : null}
				</View>

				<FlatList
					showsHorizontalScrollIndicator={false}
					snapToAlignment={'center'}
					snapToInterval={width * 0.48}
					horizontal
					data={movies}
					keyExtractor={data => data._id}
					renderItem={renderItem}
				/>
			</View>
		)
	}
)
