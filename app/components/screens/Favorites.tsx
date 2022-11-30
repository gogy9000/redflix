import React, { memo } from 'react'
import { Text, View } from 'react-native'

import Loader from '@/components/ui/Loader'
import { Layout } from '@/components/ui/layout/Layout'
import { Header } from '@/components/ui/layout/header/Header'
import { useGetFavoriteMovies } from '@/components/ui/movie/useGetFavoriteMovies'

interface IFavoritesProps {}

export const Favorites: React.FC<IFavoritesProps> = memo(({}) => {
	const { favoriteMovies, isLoading } = useGetFavoriteMovies()

	return (
		<Layout>
			<Header title={'Favorites'} />
			<>
				{isLoading ? (
					<Loader />
				) : (
					<View>
						{favoriteMovies?.map(m => (
							<Text key={m._id} className={'text-white'}>
								{m.title}
							</Text>
						))}
					</View>
				)}
			</>
		</Layout>
	)
})
