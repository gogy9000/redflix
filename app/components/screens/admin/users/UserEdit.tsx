import React, { memo } from 'react'
import { Text, View } from 'react-native'

interface IUserEditProps {}

export const UserEdit: React.FC<IUserEditProps> = memo(({}) => {
	return (
		<View>
			<Text>UserEdit</Text>
		</View>
	)
})
