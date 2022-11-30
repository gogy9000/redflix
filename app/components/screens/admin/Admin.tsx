import React, { memo } from 'react'
import { Text, View } from 'react-native'

interface IAdminProps {}

export const Admin: React.FC<IAdminProps> = memo(({}) => {
	return (
		<View>
			<Text>Admin</Text>
		</View>
	)
})
