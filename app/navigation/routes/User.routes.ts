import { Auth } from '@/components/screens/Auth'
import { Favorites } from '@/components/screens/Favorites'
import { Home } from '@/components/screens/Home'
import { Profile } from '@/components/screens/Profile'
import { Search } from '@/components/screens/Search'
import { Test } from '@/components/screens/Test'
import { Trending } from '@/components/screens/Trending'

import { IRoute } from '@/navigation/Navigation.types'

export const userRoutes: IRoute[] = [
	{ name: 'Home', component: Home },
	{ name: 'Auth', component: Auth },
	{ name: 'Test', component: Test },
	{ name: 'Favorites', component: Favorites },
	{ name: 'Profile', component: Profile },
	{ name: 'Search', component: Search },
	{ name: 'Trending', component: Trending }
]
