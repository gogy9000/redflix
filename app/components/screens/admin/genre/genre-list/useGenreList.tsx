import { useMutation, useQuery } from '@tanstack/react-query'
import Toast from 'react-native-toast-message'

import { GenreListActions } from '@/components/screens/admin/genre/genre-list/GenreListActions'
import { BodyType } from '@/components/ui/table/table.types'

import { useSearchForm } from '@/hooks/useSearchForm'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import { GenreServiceAdmin } from '@/services/genre-services/admin/genreServiceAdmin'
import { genreService } from '@/services/genre-services/genre.service'

export const useGenreList = () => {
	const { debouncedSearch, control } = useSearchForm()
	const { navigate } = useTypedNavigation()
	const { mutateAsync: onDeleteGenre } = useMutation(
		['delete genre'],
		(genreId: string) => GenreServiceAdmin.deleteGenre(genreId),
		{
			onSuccess: async () => {
				Toast.show({
					type: 'success',
					text1: 'Delete genre',
					text2: 'delete was successful'
				})
				await queryData.refetch()
			}
		}
	)

	const queryData = useQuery(
		['search genre', debouncedSearch],
		() => genreService.getAll(debouncedSearch),
		{
			select: (data): BodyType => {
				return data.map(genre => [
					genre.name,
					genre.slug,
					<GenreListActions
						genreId={genre._id}
						navigate={navigate}
						onDeleteGenre={onDeleteGenre}
					/>
				])
			}
		}
	)
	const { mutateAsync: onCreateGenre } = useMutation(
		['create genre'],
		() => GenreServiceAdmin.createGenre(),
		{
			onSuccess: async _id => {
				Toast.show({
					type: 'success',
					text1: 'Create Genre',
					text2: 'create was successful'
				})
				navigate('GenreEdit', {
					id: _id
				})
				await queryData.refetch()
			}
		}
	)

	return { queryData, control, onCreateGenre }
}
