import { LinearGradient } from 'expo-linear-gradient'
import React, { memo } from 'react'
import {
	ImageBackground,
	StyleSheet,
	View,
	useWindowDimensions
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { getMediaSource } from '@/utils/getMediaSource'

interface IMovieBackgroundProps {
	poster: string
}

export const MovieBackground: React.FC<IMovieBackgroundProps> = memo(
	({ poster }) => {
		const { height } = useWindowDimensions()
		const { top } = useSafeAreaInsets()
		const backGroundHeight = height * 0.5

		return (
			<View style={{ ...StyleSheet.absoluteFillObject, marginTop: -top }}>
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
			</View>
		)
	}
)
