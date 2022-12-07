import React, { memo } from 'react'
import { Text, View } from 'react-native'

interface IGenreEditProps {}

export const GenreEdit: React.FC<IGenreEditProps> = memo(({}) => {
	return (
		<View>
			<Text>GenreEdit</Text>
		</View>
	)
})
