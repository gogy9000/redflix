import { LinearGradient } from 'expo-linear-gradient'
import React, { memo } from 'react'
import {
	Animated,
	ImageBackground,
	StyleSheet,
	useWindowDimensions
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { getMediaSource } from '@/utils/getMediaSource'

interface IMovieBackgroundProps {
	poster: string
	scrollY: Animated.Value
}

export const MovieBackground: React.FC<IMovieBackgroundProps> = memo(
	({ poster, scrollY }) => {
		const { height } = useWindowDimensions()
		const { top } = useSafeAreaInsets()
		const backGroundHeight = height * 0.5
		// const opacity = scrollY.interpolate({
		// 	inputRange: [-350, 0, 350 / 2],
		// 	outputRange: [1, 0.9, 0.5]
		// })
		const scale = scrollY.interpolate({
			inputRange: [-350, 0, 350],
			outputRange: [2, 1.05, 1],
			extrapolate: 'clamp'
		})
		const translateY = scrollY.interpolate({
			inputRange: [-350, 0, 350],
			outputRange: [-350 / 2, 0, 350 * 0.1]
		})

		return (
			<Animated.View
				style={{
					...StyleSheet.absoluteFillObject,
					marginTop: -top,
					transform: [{ scale }, { translateY }]
					// opacity
				}}
			>
				<ImageBackground
					resizeMode={'cover'}
					source={getMediaSource(poster)}
					style={{
						...StyleSheet.absoluteFillObject,
						flexDirection: 'row',
						height: backGroundHeight,
						width: '100%'
					}}
				>
					<LinearGradient
						style={{
							...StyleSheet.absoluteFillObject,
							top: backGroundHeight * 0.76,
							alignSelf: 'flex-end',
							height: 100,
							width: '100%'
							// borderColor: 'white',
							// borderWidth: 1
						}}
						colors={['transparent', 'rgba(5,5,5,0.7)', '#090909']}
						start={[0, 0.3]}
						end={[0, 0.8]}
					/>
				</ImageBackground>
			</Animated.View>
		)
	}
)
