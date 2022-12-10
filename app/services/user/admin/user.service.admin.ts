import { request } from '@/services/api/request.api'

import { getUsersUrl } from '@/config/api.config'
import { IUser, IUserEditInput } from '@/shared/types/user.interface'

export const UserServiceAdmin = {
	getAll: (searchTerm?: string) =>
		request<IUser[]>({
			url: getUsersUrl(''),
			method: 'get',
			params: { searchTerm }
		}),
	getById: (_id: string) =>
		request<IUser>({
			url: getUsersUrl(`/${_id}`),
			method: 'get'
		}),
	updateUser: (_id: string, data: IUserEditInput) =>
		request<string>({
			url: getUsersUrl(`/${_id}`),
			method: 'put',
			data
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
