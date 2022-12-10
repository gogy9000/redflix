import { request } from '@/services/api/request.api'

import { getGenresUrl } from '@/config/api.config'
import { IGenre, IGenreEditInput } from '@/shared/types/gengre.interface'

export const genreService = {
	getAll: async (searchTerm?: string) =>
		request<IGenre[]>({
			url: getGenresUrl(''),
			method: 'get',
			params: { searchTerm }
		}),
	getBySlug: async (slug: string) =>
		request<IGenre>({
			url: getGenresUrl(`/by-slug/${slug}`),
			method: 'get'
		}),
	getById: async (_id: string) =>
		request<IGenreEditInput>({
			url: getGenresUrl(`/${_id}`),
			method: 'get'
		})
}
