import React, { memo } from 'react'
import { Text, View } from 'react-native'

interface IMovieListProps {}

export const MovieList: React.FC<IMovieListProps> = memo(({}) => {
	return (
		<View>
			<Text>MovieList</Text>
		</View>
	)
})
