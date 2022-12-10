import { request } from '@/services/api/request.api'

import { getActorsUrl } from '@/config/api.config'
import { IActor, IActorEditInput } from '@/shared/types/actor.interface'

export const ActorServiceAdmin = {
	getById: (_id: string) =>
		request<IActor>({
			url: getActorsUrl(`/${_id}`),
			method: 'get'
		}),
	create: () =>
		request<string>({
			url: getActorsUrl('/'),
			method: 'post'
		}),
	update: (_id: string, data: IActorEditInput) =>
		request<string>({
			url: getActorsUrl(`/${_id}`),
			method: 'put',
			data
		}),
	delete: (_id: string) =>
		request({
			url: getActorsUrl(`/${_id}`),
			method: 'delete'
		})
}
