import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { memo } from 'react'

import { Auth } from '@/components/screens/Auth/Auth'

import { useAuth } from '@/hooks/useAuth'

import { TypeRootStackParamList } from '@/navigation/Navigation.types'
import { userRoutes } from '@/navigation/routes/User.routes'
import { routes } from '@/navigation/routes/routes'

const Stack = createNativeStackNavigator<TypeRootStackParamList>()

export const PrivateNavigation: React.FC = memo(() => {
	const { user } = useAuth()
	return (
		<Stack.Navigator
			initialRouteName={'Home'}
			screenOptions={{
				// orientation: 'portrait',
				headerShown: false,
				contentStyle: {
					backgroundColor: '#090909'
				}
			}}
		>
			{user ? (
				user.isAdmin ? (
					routes.map(route => (
						<Stack.Screen
							options={{
								orientation: route.name === 'VideoPlayer' ? 'all' : 'portrait'
							}}
							key={route.name}
							{...route}
						/>
					))
				) : (
					userRoutes.map(route => (
						<Stack.Screen
							options={{
								orientation: route.name === 'VideoPlayer' ? 'all' : 'portrait'
							}}
							key={route.name}
							{...route}
						/>
					))
				)
			) : (
				<Stack.Screen name='Auth' component={Auth} />
			)}
		</Stack.Navigator>
	)
})
