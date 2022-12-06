import React, { memo } from 'react'
import { View } from 'react-native'
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated'

interface HamburgerAnimationInterface {
	isShow: boolean
	size?: number
}
const classname = 'bg-[#ecf0f1] rounded w-full h-0.5'
export const HamburgerAnimation: React.FC<HamburgerAnimationInterface> = memo(
	({ isShow, size = 30 }) => {
		const val = 7
		const firstLineStyle = useAnimatedStyle(() => ({
			transform: [
				{ rotate: withTiming(isShow ? '45deg' : '0deg') },
				{ translateY: withTiming(isShow ? val : 0) },
				{ translateX: withTiming(isShow ? val : 0) }
			]
		}))
		const secondLineStyle = useAnimatedStyle(() => ({
			width: withTiming(isShow ? 0 : '100%')
		}))
		const thirdLineStyle = useAnimatedStyle(() => ({
			transform: [
				{ rotate: withTiming(isShow ? '-45deg' : '0deg') },
				{ translateY: withTiming(isShow ? -val : 0) },
				{ translateX: withTiming(isShow ? val : 0) }
			]
		}))

		return (
			<View
				style={{ width: size, height: size }}
				className={`rounded-xl items-center justify-center space-y-2 `}
			>
				<Animated.View style={firstLineStyle} className={classname} />
				<Animated.View style={secondLineStyle} className={classname} />
				<Animated.View style={thirdLineStyle} className={classname} />
			</View>
		)
	}
)
