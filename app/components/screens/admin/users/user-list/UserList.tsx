import React, { memo } from 'react'
import { Text, View } from 'react-native'

interface IUserListProps {}

export const UserList: React.FC<IUserListProps> = memo(({}) => {
	return (
		<View>
			<Text>UserList</Text>
		</View>
	)
})
