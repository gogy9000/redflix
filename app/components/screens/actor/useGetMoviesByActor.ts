import { useQuery } from '@tanstack/react-query'

import { useTypedRoute } from '@/hooks/useTypedRoute'

import { movieService } from '@/services/movie.service'

export const useGetMoviesByActor = () => {
	const {
		params: { actor }
	} = useTypedRoute<'Actor'>()

	const actorId = actor?._id || ''
	const { data: movies, isLoading } = useQuery(
		['get movies by actor'],
		() => movieService.getByActor(actorId),
		{ enabled: !!actorId }
	)
	return { actor, movies, isLoading }
}
