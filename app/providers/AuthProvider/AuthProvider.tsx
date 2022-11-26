import * as SplashScreen from 'expo-splash-screen'
import React, {
	PropsWithChildren,
	createContext,
	memo,
	useEffect,
	useState
} from 'react'

import {
	IContext,
	TypeUserState
} from '@/providers/AuthProvider/auth-provider.interface'

export const AuthContext = createContext({} as IContext)

let ignore = SplashScreen.preventAutoHideAsync()

export const AuthProvider: React.FC<PropsWithChildren> = memo(
	({ children }) => {
		const [user, setUser] = useState<TypeUserState>({} as TypeUserState)
		useEffect(() => {
			let isMounted = true
			const checkAccessToken = async () => {
				try {
				} catch {
				} finally {
					let ignore = SplashScreen.hideAsync()
				}
			}
			let ignore = checkAccessToken()
			return () => {
				isMounted = false
			}
		})
		return (
			<AuthContext.Provider value={{ user, setUser }}>
				{children}
			</AuthContext.Provider>
		)
	}
)
