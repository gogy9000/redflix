import axios from 'axios'
import { getItemAsync } from 'expo-secure-store'

import { saveToStorage } from '@/services/auth/auth.helpers'

import { API_URL, getAuthUrl } from '@/config/api.config'
import { EnumSecureStore, IAuthResponse } from '@/shared/types/auth.interface'

export const getNewTokens = async () => {
	try {
		const refreshToken = await getItemAsync(EnumSecureStore.REFRESH_TOKEN)
		console.log('refreshToken', refreshToken)
		if (!refreshToken) {
			return
		}
		const response = await axios.post<string, { data: IAuthResponse }>(
			API_URL + getAuthUrl('/login/access-token'),
			{ refreshToken },
			{
				headers: { 'Content-Type': 'application/json' }
			}
		)
		console.log('tokens', response.data)
		if (response.data.accessToken) {
			await saveToStorage(response.data)
		}

		return response
	} catch (e) {
		console.log(e)
	}
}
