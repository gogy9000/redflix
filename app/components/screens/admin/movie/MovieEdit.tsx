import React, { memo } from 'react'
import { Text, View } from 'react-native'

interface IMovieEditProps {}

export const MovieEdit: React.FC<IMovieEditProps> = memo(({}) => {
	return (
		<View>
			<Text>MovieEdit</Text>
		</View>
	)
})
