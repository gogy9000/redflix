import { request } from '@/services/api/request.api'

import { getUsersUrl } from '@/config/api.config'
import { IUser } from '@/shared/types/user.interface'

export const UserServiceAdmin = {
	getAll: (searchTerm?: string) =>
		request<IUser[]>({
			url: getUsersUrl(''),
			method: 'get',
			params: { searchTerm }
		}),
	getUserCount: () =>
		request({
			url: getUsersUrl('/count'),
			method: 'get'
		}),
	deleteUser: (userId: string) =>
		request({
			method: 'delete',
			url: getUsersUrl(`/${userId}`)
		})
}
