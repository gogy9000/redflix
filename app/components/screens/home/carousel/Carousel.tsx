import React, { memo, useCallback, useMemo, useRef } from 'react'
import { Animated, ListRenderItem, Platform, View } from 'react-native'

import {
	EMPTY_ITEM_SIZE,
	ITEM_SIZE
} from '@/components/screens/home/carousel/carousel.constants'
import { CarouselItem } from '@/components/screens/home/carousel/carouselItem/CarouselItem'

import { IMovie } from '@/shared/types/movies.interface'

interface ICarouselProps {
	movies: IMovie[]
}

export const Carousel: React.FC<ICarouselProps> = memo(({ movies }) => {
	const scrollX = useRef(new Animated.Value(0)).current
	const renderItem: ListRenderItem<IMovie> = useCallback(
		({ item: movie, index }) => {
			if (movie?.slug) {
				return <CarouselItem movie={movie} index={index} scrollX={scrollX} />
			}
			return (
				<View
					style={{
						width: EMPTY_ITEM_SIZE
					}}
				/>
			)
		},
		[scrollX]
	)

	const data = useMemo(
		() => [{ _id: 'first' } as IMovie, ...movies, { _id: 'last' } as IMovie],
		[movies]
	)

	return (
		<View>
			<Animated.FlatList
				data={data}
				renderItem={renderItem}
				horizontal
				showsHorizontalScrollIndicator={false}
				keyExtractor={item => item._id}
				bounces={false}
				renderToHardwareTextureAndroid
				scrollEventThrottle={16}
				snapToInterval={ITEM_SIZE}
				snapToAlignment={'start'}
				decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
				contentContainerStyle={{
					alignItems: 'center'
				}}
				onScroll={Animated.event(
					[{ nativeEvent: { contentOffset: { x: scrollX } } }],
					{ useNativeDriver: true }
				)}
			/>
		</View>
	)
})
