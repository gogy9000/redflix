import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { memo } from 'react'

import { TypeRootStackParamList } from '@/navigation/Navigation.types'
import { userRoutes } from '@/navigation/routes/User.routes'

const Tab = createNativeStackNavigator<TypeRootStackParamList>()

export const PrivateNavigation: React.FC = memo(() => {
	return (
		<Tab.Navigator screenOptions={{ headerShown: false }}>
			{userRoutes.map(route => (
				<Tab.Screen key={route.name} {...route} />
			))}
		</Tab.Navigator>
	)
})
