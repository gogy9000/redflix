import { useMutation, useQuery } from '@tanstack/react-query'
import Toast from 'react-native-toast-message'

import { MovieActions } from '@/components/screens/admin/movie/movie-list/MovieActions'
import { BodyType } from '@/components/ui/table/table.types'

import { useSearchForm } from '@/hooks/useSearchForm'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import { MovieServiceAdmin } from '@/services/movie-services/admin/movie.service.admin'
import { movieService } from '@/services/movie-services/movie.service'

export const useMovieList = () => {
	const { debouncedSearch, control } = useSearchForm()
	const { navigate } = useTypedNavigation()

	const { mutateAsync: onDeleteMovie } = useMutation(
		['delete movie'],
		(movieId: string) => MovieServiceAdmin.deleteMovie(movieId),
		{
			onSuccess: async () => {
				Toast.show({
					type: 'success',
					text1: 'Delete movie',
					text2: 'delete was successful'
				})
				await queryData.refetch()
			}
		}
	)

	const queryData = useQuery(
		['search movie', debouncedSearch],
		() => movieService.getAll(debouncedSearch),
		{
			select: (data): BodyType => {
				return data.map(movieItem => [
					movieItem.title,
					movieItem.genres[0]?.name,
					movieItem.rating.toString(),
					<MovieActions
						movieId={movieItem._id}
						navigate={navigate}
						onDeleteMovie={onDeleteMovie}
					/>
				])
			}
		}
	)
	const { mutateAsync: onCreateMovie } = useMutation(
		['create movie'],
		() => MovieServiceAdmin.createMovie(),
		{
			onSuccess: async _id => {
				Toast.show({
					type: 'success',
					text1: 'Create movie',
					text2: 'create was successful'
				})
				navigate('MovieEdit', {
					id: _id
				})
				await queryData.refetch()
			}
		}
	)

	return { queryData, control, onCreateMovie }
}
