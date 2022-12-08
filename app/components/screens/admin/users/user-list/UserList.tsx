import React, { memo } from 'react'
import { Text } from 'react-native'

import { UserSearch } from '@/components/screens/admin/users/user-list/UserSearch'
import { useUsers } from '@/components/screens/admin/users/user-list/useUsers'
import { AdminNavigation } from '@/components/ui/admin-navigation/AdminNavigation'
import { Layout } from '@/components/ui/layout/Layout'
import { Table } from '@/components/ui/table/Table'

const headData = [
	'Email',
	'Date register',
	<Text className={'self-center text-white text-xl'}>Action</Text>
]
const className = 'w-40'
export const UserList: React.FC = memo(() => {
	const { queryData, control } = useUsers()

	return (
		<Layout isHasPadding>
			<AdminNavigation title={'Users'} />
			<UserSearch control={control} />
			<Table
				classNameHeadRow={'bg-primary'}
				classNameBodyCell={className}
				classNameHeadCell={className}
				isLoading={queryData.isLoading}
				bodyData={queryData.data}
				headData={headData}
			/>
		</Layout>
	)
})
