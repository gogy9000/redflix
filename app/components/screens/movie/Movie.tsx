import React, { memo } from 'react'
import { Text, View } from 'react-native'

interface IMovieProps {}

export const Movie: React.FC<IMovieProps> = memo(({}) => {
	return (
		<View>
			<Text>Movie</Text>
		</View>
	)
})
