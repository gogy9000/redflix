import { useQuery } from '@tanstack/react-query'

import { movieService } from '@/services/movie.service'

export const useRelatedMovies = (
	genreIds: string[],
	currentMovieId: string
) => {
	const { data: movies, isLoading } = useQuery(
		['get related movies by genres', genreIds],
		() => movieService.getByGenres(genreIds),
		{
			enabled: !!genreIds,
			select: data => data.filter(m => m._id !== currentMovieId).slice(0, 5)
		}
	)

	return { movies, isLoading }
}
