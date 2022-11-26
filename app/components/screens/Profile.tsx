import React, { memo } from 'react'
import { Text, View } from 'react-native'

interface IProfileProps {}

export const Profile: React.FC<IProfileProps> = memo(({}) => {
	return (
		<View>
			<Text>Profile</Text>
		</View>
	)
})
