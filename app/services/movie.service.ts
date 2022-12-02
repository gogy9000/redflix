import { request } from '@/services/api/request.api'

import { getMoviesUrl } from '@/config/api.config'
import { IMovie, IMovieEditInput } from '@/shared/types/movies.interface'

export const movieService = {
	async getAll(searchTerm?: string) {
		return request<IMovie[]>({
			url: getMoviesUrl(''),
			method: 'get',
			params: { searchTerm }
		})
	},
	getMostPopularMovies: async () =>
		request<IMovie[]>({
			url: getMoviesUrl('/most-popular'),
			method: 'get'
		}),
	getBySlug: async (slug: string) =>
		request<IMovie>({
			url: getMoviesUrl(`/by-slug/${slug}`),
			method: 'get'
		}),
	getByActor: async (actorId: string) =>
		request<IMovie[]>({
			url: getMoviesUrl(`/by-actor/${actorId}`),
			method: 'get'
		}),

	getByGenres: async (genreIds: string[]) =>
		request<IMovie[]>({
			url: getMoviesUrl('/by-genres'),
			method: 'post',
			data: { genreIds }
		}),
	async getById(_id: string) {
		return request<IMovieEditInput>({
			url: getMoviesUrl(`/${_id}`),
			method: 'GET'
		})
	}
}
