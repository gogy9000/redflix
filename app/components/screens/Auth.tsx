import React, { memo } from 'react'
import { Text, View } from 'react-native'

interface IAuthProps {}

export const Auth: React.FC<IAuthProps> = memo(({}) => {
	return (
		<View>
			<Text>Auth</Text>
		</View>
	)
})
