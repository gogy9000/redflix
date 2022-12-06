import { IAdminNavigationItem } from '@/components/ui/admin-navigation/adminNavigation.interface'

export const adminNavItemsData: IAdminNavigationItem[] = [
	{
		icon: 'insert-chart-outlined',
		title: 'Statistics',
		routeName: 'Admin'
	},
	{
		icon: 'group',
		title: 'Users',
		routeName: 'Users'
	},
	{
		icon: 'movie-filter',
		title: 'Movies',
		routeName: 'MoviesList'
	},
	{
		icon: 'recent-actors',
		title: 'Actors',
		routeName: 'ActorsList'
	},
	{
		icon: 'category',
		title: 'Genres',
		routeName: 'GenresList'
	}
]
