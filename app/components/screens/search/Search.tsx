import React, { memo } from 'react'
import { View } from 'react-native'

import { useSearch } from '@/components/screens/search/useSearch'
import Loader from '@/components/ui/Loader'
import { Field } from '@/components/ui/form-elements/field/Field'
import { Layout } from '@/components/ui/layout/Layout'
import { Header } from '@/components/ui/layout/header/Header'
import { MovieList } from '@/components/ui/movie/movie-item/movie-list/MovieList'

import { ISearchFormData } from '@/shared/types/search.Interface'

export const Search: React.FC = memo(() => {
	const { control, searchTerm, movies, isLoading } = useSearch()
	return (
		<Layout>
			<Header title={'Search'} />
			<View className={'mt-3'}>
				<Field<ISearchFormData>
					keyboardType={'web-search'}
					placeholder='Type something...'
					control={control}
					name={'searchTerm'}
				/>
			</View>
			{!!searchTerm ? (
				<View className={'mt-1'}>
					{isLoading ? <Loader /> : <MovieList movies={movies} />}
				</View>
			) : null}
		</Layout>
	)
})
