import React, { memo } from 'react'
import { Text } from 'react-native'

import { AdminNavigation } from '@/components/ui/admin-navigation/AdminNavigation'
import { Layout } from '@/components/ui/layout/Layout'

interface IMovieListProps {}

export const MovieList: React.FC<IMovieListProps> = memo(({}) => {
	return (
		<Layout>
			<AdminNavigation title={'Movies'} />
			<Text>MovieList</Text>
		</Layout>
	)
})
