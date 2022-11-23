import React, { memo } from 'react'
import { Text, View } from 'react-native'

interface ISettingsProps {}

export const Settings: React.FC<ISettingsProps> = memo(({}) => {
	return (
		<View>
			<Text>Settings</Text>
		</View>
	)
})
