import { request } from '@/services/api/request.api'

import { getActorsUrl } from '@/config/api.config'
import { IActor } from '@/shared/types/actor.interface'

export const actorService = {
	async getAll(searchTerm?: string) {
		return request<IActor[]>({
			url: getActorsUrl(''),
			method: 'GET',
			params: searchTerm
				? {
						searchTerm
				  }
				: {}
		})
	},
	getBySlug: async (slug: string) =>
		request<IActor>({
			url: getActorsUrl(`by-slug/${slug}`),
			method: 'get'
		})
}
