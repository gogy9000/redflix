import { useQuery } from '@tanstack/react-query'

import { useTypedRoute } from '@/hooks/useTypedRoute'

import { movieService } from '@/services/movie.service'

export const useMovie = () => {
	const {
		params: { slug }
	} = useTypedRoute<'Movie'>()
	const { data: movie, isLoading } = useQuery(['get genre by slug', slug], () =>
		movieService.getBySlug(slug)
	)
	return { movie, isLoading }
}
