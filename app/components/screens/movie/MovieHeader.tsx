import React, { memo } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import BlurButton from '@/components/ui/blur-button/BlurButton'
import Rating from '@/components/ui/movie/movie-item/Rating'
import { FavoriteButton } from '@/components/ui/movie/movie-item/favorite-button/FavoriteButton'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

interface IMovieHeaderProps {
	title: string
	rating: number
	_id: string
}

export const MovieHeader: React.FC<IMovieHeaderProps> = memo(
	({ title, _id, rating }) => {
		const { goBack } = useTypedNavigation()
		const { top } = useSafeAreaInsets()
		return (
			<View
				className={
					'absolute left-0 top-0 z-1 w-full flex-row justify-between items-center px-6 pb-6'
				}
				style={{
					marginTop: -top,
					paddingTop: top + 6
				}}
			>
				<View
					style={{
						...StyleSheet.absoluteFillObject,
						opacity: 0.3
					}}
					className='bg-[#0D0404]'
				/>
				<BlurButton icon={'chevron-left'} iconSize={23} onPress={goBack} />
				<View className={'items-center w-2/3'}>
					<Text
						className={'text-white font-semibold text-2xl mb-0.5 px-2'}
						numberOfLines={2}
					>
						{title}
					</Text>
					<Rating rating={rating} size={14} />
				</View>
				<FavoriteButton movieId={_id} />
			</View>
		)
	}
)
