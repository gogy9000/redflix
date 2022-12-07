import { request } from '@/services/api/request.api'

import { getUsersUrl } from '@/config/api.config'

export const UserServiceAdmin = {
	getUserCount: () =>
		request({
			url: getUsersUrl('/count'),
			method: 'get'
		})
}
