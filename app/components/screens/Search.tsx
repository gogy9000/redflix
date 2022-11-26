import React, { memo } from 'react'
import { Text, View } from 'react-native'

interface ISearchProps {}

export const Search: React.FC<ISearchProps> = memo(({}) => {
	return (
		<View>
			<Text>Search</Text>
		</View>
	)
})
