import { request } from '@/services/api/request.api'

import { getActorsUrl } from '@/config/api.config'
import { IActor } from '@/shared/types/actor.interface'

export const actorService = {
	getBySlug: async (slug: string) =>
		request<IActor>({
			url: getActorsUrl(`by-slug/${slug}`),
			method: 'get'
		})
}
