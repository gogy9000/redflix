import { request } from '@/services/api/request.api'

import { getMoviesUrl } from '@/config/api.config'
import { IMovie } from '@/shared/types/movies.interface'

export const movieService = {
	async getAll(params: Record<string, string>) {
		return request<IMovie[]>({
			url: getMoviesUrl(''),
			method: 'get',
			params
		})
	}
}
