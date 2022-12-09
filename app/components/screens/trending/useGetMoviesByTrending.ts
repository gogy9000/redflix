import { useQuery } from '@tanstack/react-query'

import { movieService } from '@/services/movie-services/movie.service'

export const useGetMoviesByTrending = (limit?: number) => {
	const { data: movies, isLoading } = useQuery(
		['get movie by trending'],
		() => movieService.getMostPopularMovies(),
		{ select: data => (limit ? data.slice(0, limit) : data) }
	)
	return { movies, isLoading }
}
