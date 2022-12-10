import { Admin } from '@/components/screens/admin/Admin'
import { ActorEdit } from '@/components/screens/admin/actor/ActorEdit'
import { ActorList } from '@/components/screens/admin/actor/actor-list/ActorList'
import { GenreList } from '@/components/screens/admin/genre/genre-list/GenreList'
import { GenreEdit } from '@/components/screens/admin/genre/genreEdit'
import { MovieEdit } from '@/components/screens/admin/movie/MovieEdit'
import { MovieList } from '@/components/screens/admin/movie/movie-list/MovieList'
import { UserEdit } from '@/components/screens/admin/users/user-edit/UserEdit'
import { UserList } from '@/components/screens/admin/users/user-list/UserList'

import { IRoute } from '@/navigation/Navigation.types'

export const adminRoutes: IRoute[] = [
	{
		name: 'Admin',
		component: Admin,
		isAdmin: true
	},
	{
		name: 'ActorEdit',
		component: ActorEdit,
		isAdmin: true
	},
	{
		name: 'ActorsList',
		component: ActorList,
		isAdmin: true
	},
	{
		name: 'GenreEdit',
		component: GenreEdit,
		isAdmin: true
	},
	{
		name: 'GenresList',
		component: GenreList,
		isAdmin: true
	},
	{
		name: 'MovieEdit',
		component: MovieEdit,
		isAdmin: true
	},
	{
		name: 'MoviesList',
		component: MovieList,
		isAdmin: true
	},
	{
		name: 'UserEdit',
		component: UserEdit,
		isAdmin: true
	},
	{
		name: 'Users',
		component: UserList,
		isAdmin: true
	}
]
