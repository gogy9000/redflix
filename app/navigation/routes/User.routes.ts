import { Auth } from '@/components/screens/Auth'
import { Home } from '@/components/screens/Home'

import { IRoute } from '@/navigation/Navigation.types'

export const userRoutes: IRoute[] = [
	{
		name: 'Home',
		component: Home
	},
	{
		name: 'Auth',
		component: Auth
	}
]
