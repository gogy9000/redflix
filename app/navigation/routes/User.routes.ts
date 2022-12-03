import { Favorites } from '@/components/screens/Favorites'
import { Profile } from '@/components/screens/Profile/Profile'
import { Test } from '@/components/screens/Test'
import { Actor } from '@/components/screens/actor/Actor'
import { Genre } from '@/components/screens/genre/Genre'
import { Home } from '@/components/screens/home/Home'
import { Movie } from '@/components/screens/movie/Movie'
import { Search } from '@/components/screens/search/Search'
import { Trending } from '@/components/screens/trending/Trending'

import { IRoute } from '@/navigation/Navigation.types'

export const userRoutes: IRoute[] = [
	{ name: 'Home', component: Home },
	{ name: 'Test', component: Test },
	{ name: 'Favorites', component: Favorites },
	{ name: 'Profile', component: Profile },
	{ name: 'Search', component: Search },
	{ name: 'Trending', component: Trending },
	{ name: 'Movie', component: Movie },
	{ name: 'Genre', component: Genre },
	{ name: 'Actor', component: Actor }
]
