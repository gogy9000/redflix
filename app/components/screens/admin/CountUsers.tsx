import { useQuery } from '@tanstack/react-query'
import React, { memo } from 'react'
import { Text, View } from 'react-native'

import Loader from '@/components/ui/Loader'

import { UserServiceAdmin } from '@/services/user/admin/user.service.admin'

interface ICountUsersProps {}

export const CountUsers: React.FC<ICountUsersProps> = memo(({}) => {
	const { data, isLoading } = useQuery(['get users count'], () =>
		UserServiceAdmin.getUserCount()
	)
	const count = data ? data.toString() : ''
	return (
		<View
			className={
				'border-gray py-5 border-2 rounded-2xl w-full justify-center items-center'
			}
		>
			{isLoading ? (
				<Loader />
			) : (
				<Text className={'text-white text-6xl'}>{count}</Text>
			)}

			<Text className={'text-white text-xl'}>Users</Text>
		</View>
	)
})
