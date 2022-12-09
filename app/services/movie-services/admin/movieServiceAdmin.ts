import { request } from '@/services/api/request.api'

import { getMoviesUrl } from '@/config/api.config'

export const MovieServiceAdmin = {
	async deleteMovie(_id: string) {
		return request({
			url: getMoviesUrl(''),
			method: 'delete'
		})
	}
}
