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
import {getAccessToken, getUserFromStorage} from "@/services/auth/auth.helpers";

export const AuthContext = createContext({} as IContext)

let ignore = SplashScreen.preventAutoHideAsync()

export const AuthProvider: React.FC<PropsWithChildren> = memo(
    ({children}) => {
        const [user, setUser] = useState<TypeUserState>(null)

        useEffect(() => {
            let isMounted = true

            const checkAccessToken = async () => {
                try {
                    const accessToken = await getAccessToken()
                    if (accessToken) {
                        const user = await getUserFromStorage()
                        if (isMounted) setUser(user)
                    }
                } catch (e) {
                    throw e
                } finally {
                    let ignore = SplashScreen.hideAsync()
                }
            }
            let ignore = checkAccessToken()
            return () => {
                isMounted = false
            }
        },[])
        return (
            <AuthContext.Provider value={{user, setUser}}>
                {children}
            </AuthContext.Provider>
        )
    }
)
