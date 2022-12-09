import { useMutation, useQuery } from '@tanstack/react-query'
import Toast from 'react-native-toast-message'

import { BodyType } from '@/components/ui/table/table.types'

import { useSearchForm } from '@/hooks/useSearchForm'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import { MovieServiceAdmin } from '@/services/movie-services/admin/movieServiceAdmin'
import { movieService } from '@/services/movie-services/movie.service'

export const useMovieList = () => {
	const { debouncedSearch, control } = useSearchForm()
	const { navigate } = useTypedNavigation()
	const { mutateAsync: onDeleteUser } = useMutation(
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
					movieItem.genres[0].name,
					movieItem.rating.toString()
				])
			}
		}
	)
	return { queryData, control }
}
