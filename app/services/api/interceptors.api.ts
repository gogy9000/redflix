import axios from "axios";
import {API_URL} from "@/config/api.config";
import {errorCatch} from "@/services/api/error.api";
import {deleteTokensStorage, getAccessToken} from "@/services/auth/auth.helpers";
import {getNewTokens} from "@/services/api/helper.auth";


const instance = axios.create(
    {
        baseURL: API_URL,
        headers: {'Content-Type': 'application/json'}
    }
)
instance.interceptors.request.use(async (config) => {
    const accessToken = await getAccessToken
    if (config.headers && accessToken)
        config.headers.Authorization = `Barer ${accessToken}`
    return config
})

instance.interceptors.response.use(
    (config) => config,
    async (error) => {
        const originalRequest = error.config
        if (
            error.response.status === 401 ||
            errorCatch(error) === 'jwt expired' ||
            errorCatch(error) === 'jwt must be provided' &&
            error.config &&
            !error.config._isRetry
        ) {
            originalRequest._isRetry = true
            try {
                await getNewTokens()
                return instance.request(originalRequest)
            } catch (e) {
                if (errorCatch(e) === 'jwt expired') {
                    await deleteTokensStorage()
                }
                throw e
            }
        }
        throw error
    }
)
export default instance

