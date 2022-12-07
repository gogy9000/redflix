import React, { memo } from 'react'

import { UserSearch } from '@/components/screens/admin/users/user-list/UserSearch'
import { useUsers } from '@/components/screens/admin/users/user-list/useUsers'
import { AdminNavigation } from '@/components/ui/admin-navigation/AdminNavigation'
import { Layout } from '@/components/ui/layout/Layout'
import { Table } from '@/components/ui/table/Table'

export const UserList: React.FC = memo(() => {
	const { queryData, control } = useUsers()
	const headData = ['Email', 'Date register', 'Action']
	return (
		<Layout isHasPadding>
			<AdminNavigation title={'Users'} />
			<UserSearch control={control} />
			<Table bodyData={queryData.data} headData={headData} />
		</Layout>
	)
})
