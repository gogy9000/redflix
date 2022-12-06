import { IAdminNavigationItem } from '@/components/ui/admin-navigation/adminNavigation.interface'

export const navItems: IAdminNavigationItem[] = [
	{
		icon: 'insert-chart-outlined',
		title: 'Statistics',
		routeName: 'Admin'
	},
	{
		icon: 'group',
		title: 'Users',
		routeName: 'UserList'
	},
	{
		icon: 'movie-filter',
		title: 'Movies',
		routeName: 'MovieList'
	},
	{
		icon: 'recent-actors',
		title: 'Actors',
		routeName: 'ActorList'
	},
	{
		icon: 'category',
		title: 'Genres',
		routeName: 'GenreList'
	}
]
