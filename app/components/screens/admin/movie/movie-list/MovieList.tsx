import React, { memo } from 'react'

import { MovieSearch } from '@/components/screens/admin/movie/movie-list/MovieSearch'
import { MovieListHeadData } from '@/components/screens/admin/movie/movie-list/head-data/movieListHead.data'
import { useMovieList } from '@/components/screens/admin/movie/movie-list/useMovieList'
import { AdminNavigation } from '@/components/ui/admin-navigation/AdminNavigation'
import { Layout } from '@/components/ui/layout/Layout'
import { Table } from '@/components/ui/table/Table'

const className = 'w-36'
export const MovieList: React.FC = memo(() => {
	const { queryData, control } = useMovieList()
	return (
		<Layout isHasPadding>
			<AdminNavigation title={'Movies'} />

			<MovieSearch control={control} />

			<Table
				classNameHeadCell={className}
				classNameBodyCell={className}
				headData={MovieListHeadData}
				bodyData={queryData.data}
			/>
		</Layout>
	)
})
