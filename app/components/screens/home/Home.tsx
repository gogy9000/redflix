import React, { memo } from 'react'

import { Carousel } from '@/components/screens/home/carousel/Carousel'
import { useGetAllMovies } from '@/components/screens/home/useGetAllMovies'
import Loader from '@/components/ui/Loader'
import { Layout } from '@/components/ui/layout/Layout'

interface IHomeProps {}

export const Home: React.FC<IHomeProps> = memo(({}) => {
	const { movies, isLoading } = useGetAllMovies()
	return (
		<Layout className={'flex-1 self-center justify-center bg-amber-100'}>
			{isLoading ? (
				<Loader />
			) : movies?.length ? (
				<Carousel movies={movies} />
			) : null}
		</Layout>
	)
})
