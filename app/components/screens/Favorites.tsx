import React, { memo } from 'react'
import { FlatList, ListRenderItem } from 'react-native'

import Loader from '@/components/ui/Loader'
import { Layout } from '@/components/ui/layout/Layout'
import { Header } from '@/components/ui/layout/header/Header'
import { MoviePoster } from '@/components/ui/movie/movie-item/moviePoster/MoviePoster'
import { useGetFavoriteMovies } from '@/components/ui/movie/useGetFavoriteMovies'

import { IMovie } from '@/shared/types/movies.interface'

interface IFavoritesProps {}

export const Favorites: React.FC<IFavoritesProps> = memo(({}) => {
	const { favoriteMovies, isLoading } = useGetFavoriteMovies()
	if (isLoading) {
		return <Loader />
	}
	const renderItem: ListRenderItem<IMovie> = ({ item: movie }) => (
		<MoviePoster
			rating={movie.rating}
			slug={movie.slug}
			title={movie.title}
			poster={movie.poster}
			movieId={movie._id}
		/>
	)
	return (
		<Layout>
			<Header title={'Favorites'} />
			<FlatList
				data={favoriteMovies}
				keyExtractor={item => item._id}
				renderItem={renderItem}
				numColumns={2}
			/>
		</Layout>
	)
})
