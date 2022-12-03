import React, { memo } from 'react'
import { FlatList, ListRenderItem, Platform, View } from 'react-native'

import { ActorsCarouselItem } from '@/components/screens/movie/movie-content/actors-carousel/ActorsCarouselItem'

import { IActor } from '@/shared/types/actor.interface'
import { IMovie } from '@/shared/types/movies.interface'

interface IActorsCarouselProps {
	actors: IMovie['actors']
}

export const ActorsCarousel: React.FC<IActorsCarouselProps> = memo(
	({ actors }) => {
		const renderItem: ListRenderItem<IActor> = ({ item: actor }) => (
			<ActorsCarouselItem actor={actor} />
		)
		return (
			<View>
				<FlatList
					decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
					scrollEventThrottle={16}
					showsHorizontalScrollIndicator={false}
					horizontal
					renderToHardwareTextureAndroid
					data={actors}
					renderItem={renderItem}
				/>
			</View>
		)
	}
)
