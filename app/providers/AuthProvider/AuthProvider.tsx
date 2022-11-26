import React, { PropsWithChildren, createContext, memo, useState } from 'react'

interface IContext {
	user: any
	setUser: any
}

export const AuthContext = createContext({} as IContext)

export const AuthProvider: React.FC<PropsWithChildren> = memo(
	({ children }) => {
		const [user, setUser] = useState({})
		return (
			<AuthContext.Provider value={{ user, setUser }}>
				{children}
			</AuthContext.Provider>
		)
	}
)
