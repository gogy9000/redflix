import { errorCatch } from '@/services/api/error.api'
import { getNewTokens } from '@/services/api/helper.auth'
import { instance } from '@/services/api/instance'
import {
	deleteTokensStorage,
	getAccessToken
} from '@/services/auth/auth.helpers'

instance.interceptors.request.use(
	async config => {
		const accessToken = await getAccessToken()

		if (config.headers && accessToken)
			config.headers.Authorization = `Bearer ${accessToken}`
		return config
	},
	error => {
		throw error
	}
)

instance.interceptors.response.use(
	config => config,
	async error => {
		console.log('error', error)
		const originalRequest = error.config
		if (
			(!error.config._isRetry && error?.response?.status === 401) ||
			errorCatch(error) === 'jwt expired' ||
			(errorCatch(error) === 'jwt must be provided' &&
				error.config &&
				!error.config._isRetry)
		) {
			originalRequest._isRetry = true
			try {
				console.log('try')
				await getNewTokens()
				return instance.request(originalRequest)
			} catch (e) {
				if (errorCatch(e) === 'jwt expired') {
					await deleteTokensStorage()
				}
			}
		} else {
			throw error
		}
	}
)
export default instance
