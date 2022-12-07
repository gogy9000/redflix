import React, { memo } from 'react'
import { Text, View } from 'react-native'

interface IActorListProps {}

export const ActorList: React.FC<IActorListProps> = memo(({}) => {
	return (
		<View>
			<Text>ActorList</Text>
		</View>
	)
})
