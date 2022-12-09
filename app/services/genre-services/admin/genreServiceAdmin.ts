import { request } from '@/services/api/request.api'

import { getGenresUrl } from '@/config/api.config'

export const GenreServiceAdmin = {
	createGenre: () =>
		request<string>({
			url: getGenresUrl('/'),
			method: 'POST'
		}),
	deleteGenre: (_id: string) =>
		request<string>({
			url: getGenresUrl(`/${_id}`),
			method: 'DELETE'
		})
}
