import React, { memo } from 'react'

import { ActorsListHeadData } from '@/components/screens/admin/actor/actor-list/actorsList.data'
import { useActorsList } from '@/components/screens/admin/actor/actor-list/useActorsList'
import { AdminSearch } from '@/components/screens/admin/movie/movie-list/AdminSearch'
import { AdminNavigation } from '@/components/ui/admin-navigation/AdminNavigation'
import { Layout } from '@/components/ui/layout/Layout'
import { Table } from '@/components/ui/table/Table'

const className = 'w-40'
export const ActorList: React.FC = memo(() => {
	const { onCreateActor, control, queryData } = useActorsList()
	return (
		<Layout isHasPadding>
			<AdminNavigation title={'Actors'} />
			<AdminSearch onPress={onCreateActor} control={control} />
			<Table
				classNameHeadCell={className}
				classNameBodyCell={className}
				headData={ActorsListHeadData}
				bodyData={queryData.data}
			/>
		</Layout>
	)
})
