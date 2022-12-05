import { Feather } from '@expo/vector-icons'
import cn from 'clsx'
import React, { PropsWithChildren, memo } from 'react'
import {
	GestureResponderEvent,
	Pressable,
	PressableProps,
	Text
} from 'react-native'
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withTiming
} from 'react-native-reanimated'

import { TypeFeatherIconNames } from '@/shared/types/icon.types'

interface IButtonProps extends PressableProps {
	className?: string
	textClassName?: string
	icon?: TypeFeatherIconNames
	// onPress?: (e: GestureResponderEvent) => void
}

export const Button: React.FC<PropsWithChildren<IButtonProps>> = memo(
	({
		children,
		className,
		icon,
		textClassName,
		onPressIn,
		onPressOut,
		onPress,
		...rest
	}) => {
		const scale = useSharedValue(1)
		const uas = useAnimatedStyle(() => {
			return {
				transform: [{ scale: withTiming(scale.value, { duration: 100 }) }],
				opacity: withTiming(scale.value === 0.9 ? 0.5 : 1, { duration: 100 })
			}
		})
		const pressHandler = (e: GestureResponderEvent) => {
			onPress && onPress(e)
		}
		const pressIn = (e: GestureResponderEvent) => {
			onPressIn && onPressIn(e)
			scale.value = 0.9
		}
		const pressOut = (e: GestureResponderEvent) => {
			onPressOut && onPressOut(e)
			scale.value = 1
		}
		return (
			<Pressable
				onPressIn={pressIn}
				onPressOut={pressOut}
				onPress={pressHandler}
				{...rest}
			>
				<Animated.View
					style={[uas]}
					className={cn(
						'items-center bg-primary  justify-center flex-row  rounded-lg w-full  py-1 px-3',

						className
					)}
				>
					{icon && <Feather name={icon} size={18} color='white' />}
					<Text
						className={cn(' text-white text-lg', textClassName, {
							'ml-2': !!icon
						})}
					>
						{children}
					</Text>
				</Animated.View>
			</Pressable>
		)
	}
)
