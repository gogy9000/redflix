import React, { memo, useEffect } from 'react'
import Animated, {
	useAnimatedProps,
	useSharedValue,
	withSpring
} from 'react-native-reanimated'
import Svg, { Path } from 'react-native-svg'

import { Layout } from '@/components/ui/layout/Layout'

const AnimatedPath = Animated.createAnimatedComponent(Path)

export const Test: React.FC = memo(() => {
	const radius = useSharedValue(25)

	const animatedProps = useAnimatedProps(() => {
		// draw a circle
		const path = `
    M 100, 100
    m -${radius.value}, 0
    a ${radius.value},${radius.value} 0 1,0 ${radius.value * 2},0
    a ${radius.value},${radius.value} 0 1,0 ${-radius.value * 2},0
    `
		return {
			d: path
		}
	})
	useEffect(() => {
		radius.value = withSpring(50)
	}, [])
	return (
		<Layout>
			<Svg>
				<AnimatedPath animatedProps={animatedProps} fill='white' />
			</Svg>
		</Layout>
	)
})
// import React, { memo } from 'react'
// import {
// 	GestureEvent,
// 	PanGestureHandler,
// 	PanGestureHandlerEventPayload
// } from 'react-native-gesture-handler'
// import Animated, {
// 	useAnimatedGestureHandler,
// 	useAnimatedStyle,
// 	useSharedValue,
// 	withSpring
// } from 'react-native-reanimated'
//
// import { Layout } from '@/components/ui/layout/Layout'
// import { Header } from '@/components/ui/layout/header/Header'
//
// interface ITestProps {}
// type CtxType = {
// 	startX: number
// 	startY: number
// }
//
// export const Test: React.FC<ITestProps> = memo(({}) => {
// 	const pressed = useSharedValue(false)
// 	const startingPosition = 100
// 	const x = useSharedValue(startingPosition)
// 	const y = useSharedValue(startingPosition)
//
// 	const eventHandler = useAnimatedGestureHandler<
// 		GestureEvent<PanGestureHandlerEventPayload>,
// 		CtxType
// 	>({
// 		onStart: (event, ctx: CtxType) => {
// 			pressed.value = true
// 			ctx.startX = x.value
// 			ctx.startY = y.value
// 		},
// 		onActive: (event, ctx: CtxType) => {
// 			x.value = ctx.startX + event.translationX
// 			y.value = ctx.startY + event.translationY
// 		},
// 		onEnd: (event, ctx: CtxType) => {
// 			pressed.value = false
// 			// x.value = withSpring(ctx.startX)
// 			// y.value = withSpring(ctx.startY)
// 		}
// 	})
// 	const uas = useAnimatedStyle(() => {
// 		return {
// 			backgroundColor: pressed.value ? '#FEEF86' : '#001972',
// 			transform: [
// 				{ translateX: x.value },
// 				{ translateY: y.value },
// 				{ scale: withSpring(pressed.value ? 1.2 : 1) }
// 			]
// 		}
// 	})
//
// 	return (
// 		<Layout>
// 			<Header title={'test'} />
// 			<PanGestureHandler onGestureEvent={eventHandler}>
// 				<Animated.View
// 					style={[
// 						{
// 							width: 50,
// 							height: 50,
// 							borderRadius: 50,
// 							backgroundColor: 'white'
// 						},
// 						uas
// 					]}
// 				/>
// 			</PanGestureHandler>
// 		</Layout>
// 	)
// })

// import React, { memo } from 'react'
// import { Text, View } from 'react-native'
// import {
// 	GestureEvent,
// 	PanGestureHandlerEventPayload,
// 	TapGestureHandler,
// 	TapGestureHandlerEventPayload
// } from 'react-native-gesture-handler'
// import Animated, {
// 	useAnimatedGestureHandler,
// 	useAnimatedStyle,
// 	useSharedValue,
// 	withSpring
// } from 'react-native-reanimated'
//
// import { Layout } from '@/components/ui/layout/Layout'
// import { Header } from '@/components/ui/layout/header/Header'
//
// interface ITestProps {}
//
// export const Test: React.FC<ITestProps> = memo(({}) => {
// 	const pressed = useSharedValue(false)
// 	const eventHandler = useAnimatedGestureHandler<
// 		GestureEvent<TapGestureHandlerEventPayload>
// 	>({
// 		onStart: (event, ctx) => {
// 			pressed.value = true
// 		},
// 		onEnd: (event, ctx) => {
// 			pressed.value = false
// 		}
// 	})
// 	const uas = useAnimatedStyle(() => {
// 		return {
// 			backgroundColor: pressed.value ? '#FEEF86' : '#001972',
// 			transform: [{ scale: withSpring(pressed.value ? 1.2 : 1) }]
// 		}
// 	})
//
// 	return (
// 		<Layout>
// 			<Header title={'test'} />
// 			<TapGestureHandler onGestureEvent={eventHandler}>
// 				<Animated.View
// 					style={[
// 						{
// 							width: 50,
// 							height: 50,
// 							borderRadius: 50,
// 							backgroundColor: 'white'
// 						},
// 						uas
// 					]}
// 				/>
// 			</TapGestureHandler>
// 		</Layout>
// 	)
// })

// import * as SecureStore from 'expo-secure-store'
// import React, { memo } from 'react'
// import { Text, TextInput, View } from 'react-native'
// import Animated, {
// 	Easing,
// 	useAnimatedStyle,
// 	useSharedValue,
// 	withRepeat,
// 	withSequence,
// 	withSpring,
// 	withTiming
// } from 'react-native-reanimated'
//
// import { Button } from '@/components/ui/button/Button'
// import { Layout } from '@/components/ui/layout/Layout'
// import { Header } from '@/components/ui/layout/header/Header'
//
// interface ITestProps {}
//
// export const Test: React.FC<ITestProps> = memo(({}) => {
// 	const offset = useSharedValue(0)
// 	const rotation = useSharedValue(0)
//
// 	const animatedStyle = useAnimatedStyle(() => {
// 		return {
// 			transform: [
// 				{
// 					translateX: withSpring(offset.value * 255)
// 				}
// 			]
// 		}
// 	})
// 	const customAnimatedStyle = useAnimatedStyle(() => {
// 		return {
// 			transform: [
// 				{ rotateZ: `${rotation.value}deg` }
// 				// {
// 				// 	translateX: withSpring(offset.value * 255, {
// 				// 		damping: 20,
// 				// 		stiffness: 90
// 				// 	})
// 				// }
// 			]
// 		}
// 	})
//
// 	return (
// 		<Layout isHasPadding>
// 			<Header title={'Test'} />
// 			<View
// 				className={
// 					'w-full h-1/2 border-white border-2 mb-2 items-center justify-center'
// 				}
// 			>
// 				{/*<Animated.View*/}
// 				{/*	style={[*/}
// 				{/*		{ width: 50, height: 50, backgroundColor: 'white' },*/}
// 				{/*		animatedStyle*/}
// 				{/*	]}*/}
// 				{/*/>*/}
// 				<Animated.View
// 					style={[
// 						{ width: 50, height: 50, backgroundColor: 'white' },
// 						customAnimatedStyle
// 					]}
// 				/>
// 			</View>
// 			<Button
// 				onPress={() => {
// 					offset.value = Math.random()
// 					rotation.value = withSequence(
// 						withTiming(-10, { duration: 100 }),
// 						withRepeat(withTiming(10, { duration: 100 }), 6, true),
// 						withTiming(0, { duration: 100 })
// 					)
// 				}}
// 			>
// 				move
// 			</Button>
// 		</Layout>
// 	)
// })
