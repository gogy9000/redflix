import React, { memo } from 'react'
import { Image, Pressable, Text, View } from 'react-native'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import { IActor } from '@/shared/types/actor.interface'
import { getMediaSource } from '@/utils/getMediaSource'

interface IActorsCarouselItemProps {
	actor: IActor
}

export const ActorsCarouselItem: React.FC<IActorsCarouselItemProps> = memo(
	({ actor }) => {
		const { navigate } = useTypedNavigation()
		return (
			<Pressable
				onPress={() =>
					navigate('Actor', {
						actor: actor
					})
				}
				className='flex-row items-center rounded-xl overflow-hidden w-48 mr-4'
				style={{
					height: 80,
					backgroundColor: 'rgba(255, 255, 255, 0.07)'
				}}
			>
				<Image
					resizeMode={'cover'}
					className={'h-full w-14'}
					source={getMediaSource(actor.photo)}
				/>
				<View className='p-3 w-11/12'>
					<Text
						className='text-white text-base font-medium pr-7'
						numberOfLines={2}
					>
						{actor.name}
					</Text>
				</View>
			</Pressable>
		)
	}
)
