import { request } from '@/services/api/request.api'

import { getMoviesUrl } from '@/config/api.config'

export const MovieServiceAdmin = {
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
