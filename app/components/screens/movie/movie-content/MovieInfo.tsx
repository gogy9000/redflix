import { Entypo } from '@expo/vector-icons'
import React, { memo } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Rating from '@/components/ui/movie/movie-item/Rating'
import { GenreList } from '@/components/ui/movie/movie-item/favorite-button/GenreList'

import { IGenre } from '@/shared/types/gengre.interface'

interface IMovieInfoProps {
	title: string
	rating: number
	duration: number
	year: number
	genres: IGenre[]
}

export const MovieInfo: React.FC<IMovieInfoProps> = memo(
	({ title, rating, duration, year, genres }) => {
		return (
			<View className={'px-6 mb-3'} style={{ opacity: 1 }}>
				<Text className={'text-5xl font-semibold text-[#F9FCFC] mb-2 pr-2'}>
					{title}
				</Text>
				<View className={'mb-4 flex-row items-center'}>
					<Rating rating={rating} />
					<Entypo
						name='dot-single'
						size={18}
						color='rgba(255,255,255,.5)'
						style={{
							marginLeft: 4
						}}
					/>
					<Text style={styles.text}>{duration} min.</Text>
					<Entypo
						name='dot-single'
						size={18}
						color='rgba(255,255,255,.5)'
						style={{
							marginLeft: 4
						}}
					/>
					<Text style={styles.text}>{year}</Text>
				</View>
				<GenreList genres={genres} />
			</View>
		)
	}
)
const styles = StyleSheet.create({
	text: {
		color: 'white',
		marginHorizontal: 4,
		fontSize: 18
	}
})
