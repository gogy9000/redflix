import { BlurView } from 'expo-blur'
import React, { memo, useCallback } from 'react'
import {
	ImageBackground,
	Pressable,
	Text,
	View,
	ViewStyle,
	useWindowDimensions
} from 'react-native'
import Animated from 'react-native-reanimated'

import Rating from '@/components/ui/movie/movie-item/Rating'
import { useOpacityAndScaleAnimations } from '@/components/ui/movie/movie-item/UseOpacityAndScaleAnimations'
import { FavoriteButton } from '@/components/ui/movie/movie-item/favorite-button/FavoriteButton'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import { useTypedRoute } from '@/hooks/useTypedRoute'

import { getMediaSource } from '@/utils/getMediaSource'

interface IMoviePosterProps {
	poster: string
	movieId: string
	title: string
	slug: string
	rating: number
	index: number
	style?: ViewStyle
	widthKef?: number
}

export const MovieItem: React.FC<IMoviePosterProps> = memo(
	({
		poster,
		movieId,
		title = '',
		rating,
		index,
		slug,
		style,
		widthKef = 0.45
	}) => {
		const { navigate } = useTypedNavigation()
		const { name } = useTypedRoute()
		const { width, height } = useWindowDimensions()
		const { animatedStyle } = useOpacityAndScaleAnimations(index)
		const isFavoritePage = name === 'Favorites'

		const onNavigatePathMovie = useCallback(() => {
			navigate('Movie', { slug })
		}, [slug])
		return (
			<Pressable onPress={onNavigatePathMovie} style={style}>
				<Animated.View style={animatedStyle} className={'px-2 py-2'}>
					<ImageBackground
						style={[
							{
								height: height / 3,
								width: width * widthKef
							}
						]}
						resizeMode={'cover'}
						borderRadius={10}
						className={'relative justify-end '}
						source={getMediaSource(poster)}
					>
						{isFavoritePage ? (
							<View className='absolute z-2 right-3 top-2'>
								<FavoriteButton isSmall movieId={movieId} />
							</View>
						) : null}
						<BlurView
							intensity={50}
							tint='dark'
							className={'w-full h-1/4 py-1 px-1 items-center rounded-b-md'}
						>
							<Rating rating={rating} size={15} />
							<Text
								className={'text-white text-xl font-semibold overflow-hidden'}
								numberOfLines={1}
							>
								{title}
							</Text>
						</BlurView>
					</ImageBackground>
				</Animated.View>
			</Pressable>
		)
	}
)
