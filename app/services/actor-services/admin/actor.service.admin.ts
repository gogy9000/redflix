import { request } from '@/services/api/request.api'

import { getActorsUrl } from '@/config/api.config'

export const ActorServiceAdmin = {
	create: () =>
		request<string>({
			url: getActorsUrl('/'),
			method: 'post'
		}),
	delete: (_id: string) =>
		request({
			url: getActorsUrl(`/${_id}`),
			method: 'delete'
		})
}
