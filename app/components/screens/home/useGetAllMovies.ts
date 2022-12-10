import { useQuery } from '@tanstack/react-query'

import { movieService } from '@/services/movie-services/movie.service'

export const useGetAllMovies = () => {
	const { isLoading, data: movies } = useQuery(
		['movies'],
		() => movieService.getAll(),
		{
			select: data => data.slice(0, 10)
		}
	)
	return { movies, isLoading }
}
