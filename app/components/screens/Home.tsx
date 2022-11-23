import React, { memo } from 'react'
import { Text, View } from 'react-native'

interface IHomeProps {}

export const Home: React.FC<IHomeProps> = memo(({}) => {
	return (
		<View className={'flex-1 self-center justify-center bg-amber-100'}>
			<Text>Home</Text>
		</View>
	)
})
