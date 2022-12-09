import { Feather } from '@expo/vector-icons'
import cn from 'clsx'
import React, { PropsWithChildren, memo } from 'react'
import { GestureResponderEvent, PressableProps, Text } from 'react-native'
import {
	useAnimatedStyle,
	useSharedValue,
	withTiming
} from 'react-native-reanimated'

import { ReanimatedPressable } from '@/components/ui/ReanimatedPressable'

import { TypeFeatherIconNames } from '@/shared/types/icon.types'

interface IButtonProps extends PressableProps {
	ViewClassName?: string
	textClassName?: string
	icon?: TypeFeatherIconNames
	size?: number
}

export const Button: React.FC<PropsWithChildren<IButtonProps>> = memo(
	({
		children,
		ViewClassName,
		icon,
		size = 18,
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
			<ReanimatedPressable
				onPressIn={pressIn}
				onPressOut={pressOut}
				onPress={pressHandler}
				style={[uas]}
				className={cn(
					'items-center bg-primary  justify-center flex-row  rounded-lg   py-1 px-3',
					ViewClassName
				)}
				{...rest}
			>
				{icon && <Feather name={icon} size={size} color='white' />}
				{typeof children === 'string' ? (
					<Text
						className={cn(' text-white text-lg', textClassName, {
							'ml-2': !!icon
						})}
					>
						{children}
					</Text>
				) : (
					<>{children}</>
				)}
			</ReanimatedPressable>
		)
	}
)
