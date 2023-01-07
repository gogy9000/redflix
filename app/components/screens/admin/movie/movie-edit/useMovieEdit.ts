import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import Toast from 'react-native-toast-message'

import { useTypedRoute } from '@/hooks/useTypedRoute'

import { MovieServiceAdmin } from '@/services/movie-services/admin/movie.service.admin'

import { IMovieEditInput } from '@/shared/types/movies.interface'

type Entries<T> = {
	[K in keyof T]: [K, T[K]]
}[keyof T][]

function entries<T>(obj: T): Entries<T> {
	return Object.entries(
		obj as { [s: string]: unknown } | ArrayLike<unknown>
	) as any
}

export const useMovieEdit = () => {
	const {
		params: { id: movieId }
	} = useTypedRoute<'MovieEdit'>()
	const { control, setValue, handleSubmit, getValues } =
		useForm<IMovieEditInput>({
			mode: 'onChange'
		})
	const { isLoading, isSuccess } = useQuery(
		['get movie ', movieId],
		() => MovieServiceAdmin.getById(movieId),
		{
			onSuccess: data => {
				entries(data).forEach(([key, value]) => {
					setValue(key, value)
				})
			},
			enabled: !!movieId
		}
	)
	const queryClient = useQueryClient()

	const { mutateAsync } = useMutation(
		['update movie'],
		(data: IMovieEditInput) => MovieServiceAdmin.update(movieId, data),
		{
			onSuccess: async () => {
				Toast.show({
					type: 'success',
					text1: 'Update movie',
					text2: 'update was successful'
				})
				await queryClient.invalidateQueries(['search movies'])
			}
		}
	)
	const onSubmit = handleSubmit(async data => {
		await mutateAsync(data)
	})
	return { control, setValue, isLoading, isSuccess, onSubmit, getValues }
}
