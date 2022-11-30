import { Favorites } from '@/components/screens/Favorites'
import { Profile } from '@/components/screens/Profile/Profile'
import { Search } from '@/components/screens/Search'
import { Test } from '@/components/screens/Test'
import { Trending } from '@/components/screens/Trending'
import { Genre } from '@/components/screens/genre/Genre'
import { Home } from '@/components/screens/home/Home'
import { Movie } from '@/components/screens/movie/Movie'

import { IRoute } from '@/navigation/Navigation.types'

export const userRoutes: IRoute[] = [
	{ name: 'Home', component: Home },
	{ name: 'Test', component: Test },
	{ name: 'Favorites', component: Favorites },
	{ name: 'Profile', component: Profile },
	{ name: 'Search', component: Search },
	{ name: 'Trending', component: Trending },
	{ name: 'Movie', component: Movie },
	{ name: 'Genre', component: Genre }
]
