import React, { memo } from 'react'
import { Animated, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import BlurButton from '@/components/ui/blur-button/BlurButton'
import Rating from '@/components/ui/movie/movie-item/Rating'
import { FavoriteButton } from '@/components/ui/movie/movie-item/favorite-button/FavoriteButton'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

interface IMovieHeaderProps {
	title: string
	rating: number
	_id: string
	scrollY: Animated.Value
}

export const MovieHeader: React.FC<IMovieHeaderProps> = memo(
	({ title, _id, rating, scrollY }) => {
		const { goBack } = useTypedNavigation()
		const { top } = useSafeAreaInsets()
		return (
			<View
				className={
					'absolute left-0 top-0 z-1 w-full flex-row justify-between items-center px-6 pb-6'
				}
				style={{
					marginTop: -top,
					paddingTop: top + 30
				}}
			>
				<Animated.View
					style={{
						...StyleSheet.absoluteFillObject,
						opacity: scrollY.interpolate({
							inputRange: [-350, 0, 350],
							outputRange: [0, 0, 1.8]
						})
					}}
					className='bg-[#0D0404]'
				/>
				<BlurButton icon={'chevron-left'} iconSize={23} onPress={goBack} />
				<Animated.View
					style={{
						opacity: scrollY.interpolate({
							inputRange: [-350, 0, 350],
							outputRange: [0, 0, 1.6]
						})
					}}
					className={'items-center w-2/3'}
				>
					<Text
						className={'text-white font-semibold text-2xl mb-0.5 px-2'}
						numberOfLines={2}
					>
						{title}
					</Text>
					<Rating rating={rating} size={14} />
				</Animated.View>
				<FavoriteButton movieId={_id} />
			</View>
		)
	}
)
