import { BlurView } from 'expo-blur'
import React, { memo } from 'react'
import { ImageBackground, Text, View, useWindowDimensions } from 'react-native'

import Rating from '@/components/ui/movie/movie-item/Rating'
import { FavoriteButton } from '@/components/ui/movie/movie-item/favorite-button/FavoriteButton'

import { getMediaSource } from '@/utils/getMediaSource'

interface IMoviePosterProps {
	poster: string
	movieId: string
	title: string
	slug: string
	rating: number
}

export const MoviePoster: React.FC<IMoviePosterProps> = memo(
	({ poster, movieId, title = '', rating }) => {
		const { width, height } = useWindowDimensions()
		return (
			<View className={'px-2 py-2'}>
				<ImageBackground
					style={[
						{
							height: height / 3,
							width: width * 0.45
						}
					]}
					resizeMode={'cover'}
					borderRadius={10}
					className={'relative justify-end '}
					source={getMediaSource(poster)}
				>
					<View className='absolute z-2 right-3 top-2'>
						<FavoriteButton isSmall movieId={movieId} />
					</View>
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
			</View>
		)
	}
)
