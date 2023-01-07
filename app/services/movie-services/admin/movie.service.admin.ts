import { request } from '@/services/api/request.api'

import { getMoviesUrl } from '@/config/api.config'
import { IMovieEditInput } from '@/shared/types/movies.interface'

export const MovieServiceAdmin = {
	async getById(_id: string) {
		return request<IMovieEditInput>({
			url: getMoviesUrl(`/${_id}`),
			method: 'GET'
		})
	},
	update: async (_id: string, data: IMovieEditInput) =>
		request<string>({
			url: getMoviesUrl(`/${_id}`),
			method: 'put',
			data
		}),
	async createMovie() {
		return request<string>({
			url: getMoviesUrl(''),
			method: 'POST'
		})
	},

	async deleteMovie(_id: string) {
		return request<string>({
			url: getMoviesUrl(`/${_id}`),
			method: 'delete'
		})
	}
}
