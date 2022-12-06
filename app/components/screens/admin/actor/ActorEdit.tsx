import React, { memo } from 'react'
import { Text, View } from 'react-native'

interface IActorEditProps {}

export const ActorEdit: React.FC<IActorEditProps> = memo(({}) => {
	return (
		<View>
			<Text>ActorEdit</Text>
		</View>
	)
})
