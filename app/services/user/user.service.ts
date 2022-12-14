import { request } from '@/services/api/request.api'

import { getUsersUrl } from '@/config/api.config'
import { IAuthFormData } from '@/shared/types/auth.interface'
import { IMovie } from '@/shared/types/movies.interface'
import { IGetProfileResponse } from '@/shared/types/user.interface'

export const userService = {
	async getProfile() {
		return request<IGetProfileResponse>({
			url: getUsersUrl('/profile'),
			method: 'get'
		})
	},
	updateProfile(data: IAuthFormData) {
		return request<{}>({
			url: getUsersUrl('/profile'),
			method: 'put',
			data: data
		})
	},
	async getFavoritesMovies() {
		const res = await request<IMovie[]>({
			url: getUsersUrl('/profile/favorites'),
			method: 'get'
		})
		//бекенд еб...ный
		// @ts-ignore
		if (res === '') {
			return []
		}
		return res
	},
	async putFavoriteMovie(movieId: string) {
		return request<{}>({
			url: getUsersUrl('/profile/favorites'),
			method: 'put',
			data: { movieId }
		})
	}
}
