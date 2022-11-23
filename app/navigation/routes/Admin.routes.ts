import { Admin } from '@/components/screens/admin/home/Admin'

import { IRoute } from '@/navigation/Navigation.types'

export const adminRoutes: IRoute[] = [
	{
		name: 'Home',
		component: Admin,
		isAdmin: true
	}
]
