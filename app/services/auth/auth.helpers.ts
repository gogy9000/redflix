import AsyncStorage from '@react-native-async-storage/async-storage'
import { deleteItemAsync, getItemAsync, setItemAsync } from 'expo-secure-store'

import {
	EnumSecureStore,
	EnumSyncStorage,
	IAuthResponse,
	ITokens
} from '@/shared/types/auth.interface'

export const getAccessToken = async () => {
	const accessToken = await getItemAsync(EnumSecureStore.ACCESS_TOKEN)
	return accessToken || null
}
export const saveTokenStorage = async (data: ITokens) => {
	await setItemAsync(EnumSecureStore.ACCESS_TOKEN, data.accessToken)
	await setItemAsync(EnumSecureStore.REFRESH_TOKEN, data.refreshToken)
}
export const deleteTokensStorage = async () => {
	await deleteItemAsync(EnumSecureStore.ACCESS_TOKEN)
	await deleteItemAsync(EnumSecureStore.REFRESH_TOKEN)
}

export const getUserFromStorage = async () => {
	try {
		return JSON.parse(
			(await AsyncStorage.getItem(EnumSyncStorage.USER)) || '{}'
		)
	} catch (e) {
		console.log(e)
		return null
	}
}

export const saveToStorage = async (data: IAuthResponse) => {
	await saveTokenStorage(data)
	try {
		await AsyncStorage.setItem(EnumSyncStorage.USER, JSON.stringify(data.user))
	} catch (e) {
		console.log(e)
	}
}
