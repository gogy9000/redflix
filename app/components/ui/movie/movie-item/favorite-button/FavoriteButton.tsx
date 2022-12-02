import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FC, memo } from 'react'
import { StyleSheet } from 'react-native'
import Animated, { withSpring } from 'react-native-reanimated'

import BlurButton from '@/components/ui/blur-button/BlurButton'
import { useLikeMovie } from '@/components/ui/movie/movie-item/favorite-button/useLikeMovie'

import { useFavoriteAnimation } from './useFavoriteAnimation'

interface IFavoriteButton {
	movieId: string
	isSmall?: boolean
}

export const FavoriteButton: FC<IFavoriteButton> = memo(
	({ isSmall = false, movieId }) => {
		const { toggleFavorite, isAdded } = useLikeMovie(movieId)
		const { outlineStyle, fillStyle, liked } = useFavoriteAnimation(isAdded)

		const onPressHandler = () => {
			liked.value = withSpring(liked.value === 1 ? 0 : 1)
			toggleFavorite(movieId)
		}
		return (
			<BlurButton isSmall={isSmall} onPress={onPressHandler}>
				<Animated.View
					style={[StyleSheet.absoluteFill, outlineStyle]}
					className='items-center justify-center'
				>
					<MaterialCommunityIcons
						name={'heart-outline'}
						size={isSmall ? 19 : 22}
						color={'white'}
					/>
				</Animated.View>

				<Animated.View style={fillStyle}>
					<MaterialCommunityIcons
						name={'heart'}
						size={isSmall ? 19 : 22}
						color={'#DC3F41'}
					/>
				</Animated.View>
			</BlurButton>
		)
	}
)
