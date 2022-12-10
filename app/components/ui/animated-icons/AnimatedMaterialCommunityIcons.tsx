import { MaterialCommunityIcons } from '@expo/vector-icons'
import React, { memo, useCallback, useState } from 'react'
import {
	ColorValue,
	GestureResponderEvent,
	Pressable,
	PressableProps
} from 'react-native'
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated'

import { TypeMaterialCommunityIconNames } from '@/shared/types/icon.types'

const ReAnimatedMaterialCommunityIcons = Animated.createAnimatedComponent(
	MaterialCommunityIcons
)

interface IAnimatedMaterialCommunityIconsProps extends PressableProps {
	name: TypeMaterialCommunityIconNames
	color?: ColorValue
	size?: number
}

export const AnimatedMaterialCommunityIcons: React.FC<IAnimatedMaterialCommunityIconsProps> =
	memo(({ color, name, size, onPressIn, onPressOut, ...rest }) => {
		const [isPressed, setIsPressed] = useState(false)
		const animatedStyle = useAnimatedStyle(
			() => ({
				transform: [{ scale: withTiming(isPressed ? 0.9 : 1) }],
				opacity: withTiming(isPressed ? 0.5 : 1),
				backgroundColor: withTiming(
					isPressed ? 'rgba(5,5,5,0.2)' : 'transparent'
				),
				borderRadius: 50,
				padding: 5
			}),
			[isPressed]
		)
		const pressOut = useCallback((event: GestureResponderEvent) => {
			onPressIn && onPressIn(event)
			setIsPressed(false)
		}, [])
		const pressIn = useCallback((event: GestureResponderEvent) => {
			onPressOut && onPressOut(event)
			setIsPressed(true)
		}, [])

		return (
			<Pressable onPressIn={pressIn} onPressOut={pressOut} {...rest}>
				<ReAnimatedMaterialCommunityIcons
					style={animatedStyle}
					name={name}
					color={color}
					size={size}
				/>
			</Pressable>
		)
	})
