import React, { memo } from 'react'
import { Text, View } from 'react-native'

interface ITrendingProps {}

export const Trending: React.FC<ITrendingProps> = memo(({}) => {
	return (
		<View>
			<Text>Trending</Text>
		</View>
	)
})
