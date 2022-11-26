import React, { memo } from 'react'
import { Text, View } from 'react-native'

interface IFavoritesProps {}

export const Favorites: React.FC<IFavoritesProps> = memo(({}) => {
	return (
		<View>
			<Text>Favorites</Text>
		</View>
	)
})
