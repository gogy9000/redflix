import AsyncStorage from '@react-native-async-storage/async-storage'

import { request } from '@/services/api/request.api'
import {
	deleteTokensStorage,
	saveToStorage
} from '@/services/auth/auth.helpers'

import { getAuthUrl } from '@/config/api.config'
import { EnumSyncStorage, IAuthResponse } from '@/shared/types/auth.interface'

export const AuthService = {
	async main(variant: 'register' | 'login', email: string, password: string) {
		console.log(email, password)
		const response = await request<IAuthResponse>({
			url: getAuthUrl(`/${variant}`),
			method: 'post',
			data: { email, password }
		})
		if (response?.accessToken) {
			await saveToStorage(response)
		}
		return response
	},
	async logout() {
		await deleteTokensStorage()
		await AsyncStorage.removeItem(EnumSyncStorage.USER)
	}
}
