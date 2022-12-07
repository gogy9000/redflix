import React, { memo } from 'react'
import { Text, View } from 'react-native'

interface IGenreListProps {}

export const GenreList: React.FC<IGenreListProps> = memo(({}) => {
	return (
		<View>
			<Text>GenreList</Text>
		</View>
	)
})
