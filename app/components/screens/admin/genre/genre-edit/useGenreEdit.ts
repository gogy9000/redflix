import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import Toast from 'react-native-toast-message'

import { useTypedRoute } from '@/hooks/useTypedRoute'

import { GenreServiceAdmin } from '@/services/genre-services/admin/genreServiceAdmin'

import { IGenreEditInput } from '@/shared/types/gengre.interface'

type Entries<T> = {
	[K in keyof T]: [K, T[K]]
}[keyof T][]

function entries<T>(obj: T): Entries<T> {
	return Object.entries(
		obj as { [s: string]: unknown } | ArrayLike<unknown>
	) as any
}

export const useGenreEdit = () => {
	const {
		params: { id: genreId }
	} = useTypedRoute<'GenreEdit'>()

	const { control, setValue, handleSubmit, getValues } =
		useForm<IGenreEditInput>({
			mode: 'onChange'
		})

	const { isLoading } = useQuery(
		['get genre', genreId],
		() => GenreServiceAdmin.getById(genreId),
		{
			onSuccess: (data: IGenreEditInput) => {
				entries(data).forEach(([key, value]) => {
					setValue(key, value)
				})
			},
			enabled: !!genreId
		}
	)
	const queryClient = useQueryClient()
	const { mutateAsync } = useMutation(
		['update genre'],
		(data: IGenreEditInput) => GenreServiceAdmin.updateGenre(genreId, data),
		{
			async onSuccess() {
				Toast.show({
					type: 'success',
					text1: 'Update genre',
					text2: 'update was successful'
				})
				await queryClient.invalidateQueries(['search genres'])
			}
		}
	)
	const onSubmit = handleSubmit(async data => {
		await mutateAsync(data)
	})
	return { control, setValue, isLoading, onSubmit, getValues }
}
