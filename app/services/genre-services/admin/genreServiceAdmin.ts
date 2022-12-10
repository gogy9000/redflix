import { request } from '@/services/api/request.api'

import { getGenresUrl } from '@/config/api.config'
import { IGenre, IGenreEditInput } from '@/shared/types/gengre.interface'

export const GenreServiceAdmin = {
	getById: (_id: string) =>
		request<IGenre>({
			url: getGenresUrl(`/${_id}`),
			method: 'get'
		}),
	createGenre: () =>
		request<string>({
			url: getGenresUrl('/'),
			method: 'POST'
		}),
	updateGenre: (_id: string, data: IGenreEditInput) =>
		request<any>({
			url: getGenresUrl(`/${_id}`),
			method: 'put',
			data
		}),
	deleteGenre: (_id: string) =>
		request<string>({
			url: getGenresUrl(`/${_id}`),
			method: 'DELETE'
		})
}
