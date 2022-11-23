import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

import { PrivateNavigation } from '@/navigation/PrivateNavigation'

export const Navigation: React.FC = () => {
	return (
		<NavigationContainer>
			<PrivateNavigation />
		</NavigationContainer>
	)
}
