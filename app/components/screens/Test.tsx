import * as SecureStore from 'expo-secure-store'
import React, { memo } from 'react'
import { Text, TextInput, View } from 'react-native'
import Animated, {
	Easing,
	useAnimatedStyle,
	useSharedValue,
	withRepeat,
	withSequence,
	withSpring,
	withTiming
} from 'react-native-reanimated'

import { Button } from '@/components/ui/button/Button'
import { Layout } from '@/components/ui/layout/Layout'
import { Header } from '@/components/ui/layout/header/Header'

interface ITestProps {}

export const Test: React.FC<ITestProps> = memo(({}) => {
	const offset = useSharedValue(0)
	const rotation = useSharedValue(0)

	const animatedStyle = useAnimatedStyle(() => {
		return {
			transform: [
				{
					translateX: withSpring(offset.value * 255)
				}
			]
		}
	})
	const customAnimatedStyle = useAnimatedStyle(() => {
		return {
			transform: [
				{ rotateZ: `${rotation.value}deg` }
				// {
				// 	translateX: withSpring(offset.value * 255, {
				// 		damping: 20,
				// 		stiffness: 90
				// 	})
				// }
			]
		}
	})

	return (
		<Layout isHasPadding>
			<Header title={'Test'} />
			<View
				className={
					'w-full h-1/2 border-white border-2 mb-2 items-center justify-center'
				}
			>
				{/*<Animated.View*/}
				{/*	style={[*/}
				{/*		{ width: 50, height: 50, backgroundColor: 'white' },*/}
				{/*		animatedStyle*/}
				{/*	]}*/}
				{/*/>*/}
				<Animated.View
					style={[
						{ width: 50, height: 50, backgroundColor: 'white' },
						customAnimatedStyle
					]}
				/>
			</View>
			<Button
				onPress={() => {
					offset.value = Math.random()
					rotation.value = withSequence(
						withTiming(-10, { duration: 100 }),
						withRepeat(withTiming(10, { duration: 100 }), 6, true),
						withTiming(0, { duration: 100 })
					)
				}}
			>
				move
			</Button>
		</Layout>
	)
})
