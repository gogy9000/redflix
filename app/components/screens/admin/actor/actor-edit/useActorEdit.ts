import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import Toast from 'react-native-toast-message'

import { useTypedRoute } from '@/hooks/useTypedRoute'

import { ActorServiceAdmin } from '@/services/actor-services/admin/actor.service.admin'

import { IActorEditInput } from '@/shared/types/actor.interface'

type Entries<T> = {
	[K in keyof T]: [K, T[K]]
}[keyof T][]

function entries<T>(obj: T): Entries<T> {
	return Object.entries(
		obj as { [s: string]: unknown } | ArrayLike<unknown>
	) as any
}

export const useActorEdit = () => {
	const {
		params: { id: actorId }
	} = useTypedRoute<'ActorEdit'>()

	const { control, setValue, handleSubmit, getValues } =
		useForm<IActorEditInput>({
			mode: 'onChange'
		})

	const { isLoading } = useQuery(
		['get actor', actorId],
		() => ActorServiceAdmin.getById(actorId),
		{
			onSuccess: (data: IActorEditInput) => {
				entries(data).forEach(([key, value]) => {
					setValue(key, value)
				})
			},
			enabled: !!actorId
		}
	)
	const queryClient = useQueryClient()
	const { mutateAsync } = useMutation(
		['update actor'],
		(data: IActorEditInput) => ActorServiceAdmin.update(actorId, data),
		{
			async onSuccess() {
				Toast.show({
					type: 'success',
					text1: 'Update actor',
					text2: 'update was successful'
				})
				await queryClient.invalidateQueries(['search actors'])
			}
		}
	)
	const onSubmit = handleSubmit(async data => {
		await mutateAsync(data)
	})
	return { control, setValue, isLoading, onSubmit, getValues }
}
