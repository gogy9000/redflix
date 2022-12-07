import React, { memo } from 'react'

import { Carousel } from '@/components/screens/home/carousel/Carousel'
import { useGetAllMovies } from '@/components/screens/home/useGetAllMovies'
import { Layout } from '@/components/ui/layout/Layout'

interface IHomeProps {}

export const Home: React.FC<IHomeProps> = memo(({}) => {
	const { movies, isLoading } = useGetAllMovies()
	return (
		<Layout
			isLoading={isLoading}
			className={'flex-1 self-center justify-center bg-amber-100'}
		>
			{movies?.length ? <Carousel movies={movies} /> : null}
		</Layout>
	)
})
