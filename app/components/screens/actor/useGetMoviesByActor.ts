import { useQuery } from '@tanstack/react-query'

import { useTypedRoute } from '@/hooks/useTypedRoute'

import { actorService } from '@/services/actor-services/actor.service'
import { movieService } from '@/services/movie.service'

export const useGetMoviesByActor = () => {
	const { params } = useTypedRoute<'Actor'>()
	const { data: actor, isLoading } = useQuery(['get actor by slug'], () =>
		actorService.getBySlug(params.slug)
	)
	const actorId = actor?._id || ''
	const { data: movies, isLoading: isMovieLoading } = useQuery(
		['get movies by actor'],
		() => movieService.getByActor(actorId),
		{ enabled: !!actorId }
	)
	return { actor, movies, isLoading: isLoading || isMovieLoading }
}
