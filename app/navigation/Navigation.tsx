import {
	NavigationContainer,
	useNavigationContainerRef
} from '@react-navigation/native'
import React, { memo, useEffect, useState } from 'react'

import { BottomMenu } from '@/components/ui/layout/bottom-menu/BottomMenu'

import { useAuth } from '@/hooks/useAuth'

import { PrivateNavigation } from '@/navigation/PrivateNavigation'

export const Navigation: React.FC = memo(() => {
	const { user } = useAuth()
	const [currentRoute, setCurrentRoute] = useState<string | undefined>(
		undefined
	)
	const navigateRef = useNavigationContainerRef()
	useEffect(() => {
		setCurrentRoute(navigateRef.getCurrentRoute()?.name)
		const listener = navigateRef.addListener('state', () => {
			setCurrentRoute(navigateRef.getCurrentRoute()?.name)
		})
		return () => {
			navigateRef.removeListener('state', listener)
		}
	}, [])

	return (
		<NavigationContainer ref={navigateRef}>
			<PrivateNavigation />
			{user && currentRoute && (
				<BottomMenu
					navigate={navigateRef.navigate}
					currentRoute={currentRoute}
				/>
			)}
		</NavigationContainer>
	)
})
