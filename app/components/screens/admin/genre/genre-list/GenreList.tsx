import React, { memo } from 'react'

import { GenreListHeadData } from '@/components/screens/admin/genre/genre-list/genreListHead.data'
import { useGenreList } from '@/components/screens/admin/genre/genre-list/useGenreList'
import { AdminSearch } from '@/components/screens/admin/movie/movie-list/AdminSearch'
import { AdminNavigation } from '@/components/ui/admin-navigation/AdminNavigation'
import { Layout } from '@/components/ui/layout/Layout'
import { Table } from '@/components/ui/table/Table'

const className = 'w-40'
export const GenreList: React.FC = memo(() => {
	const { queryData, control, onCreateGenre } = useGenreList()
	return (
		<Layout isHasPadding>
			<AdminNavigation title={'Genres'} />
			<AdminSearch onPress={onCreateGenre} control={control} />
			<Table
				classNameHeadCell={className}
				classNameBodyCell={className}
				headData={GenreListHeadData}
				bodyData={queryData.data}
			/>
		</Layout>
	)
})
