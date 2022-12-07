import { useQuery } from '@tanstack/react-query'

import { useTypedRoute } from '@/hooks/useTypedRoute'

import { genreService } from '@/services/genre.service'
import { movieService } from '@/services/movie.service'

export const useGetMovieByGenre = () => {
	const { params } = useTypedRoute<'Genre'>()
	const { isLoading, data: genre } = useQuery(
		['get genre by slug', params.slug],
		() => genreService.getBySlug(params.slug)
	)
	const genreId = genre?._id || ''
	const { isLoading: isMovieLoading, data: movies } = useQuery(
		['get movies by genre', genreId],
		() => movieService.getByGenres([genreId]),
		{ enabled: !!genreId }
	)
	return { genre, movies, isLoading: isLoading || isMovieLoading }
}
