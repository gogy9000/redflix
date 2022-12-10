import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import Toast from 'react-native-toast-message'

import { useTypedRoute } from '@/hooks/useTypedRoute'

import { UserServiceAdmin } from '@/services/user/admin/user.service.admin'

import { IUserEditInput } from '@/shared/types/user.interface'

export const useUserEdit = () => {
	const { control, setValue, handleSubmit } = useForm<IUserEditInput>({
		mode: 'onChange'
	})

	const {
		params: { id: userId }
	} = useTypedRoute<'UserEdit'>()

	const { isLoading } = useQuery(
		['get user', userId],
		() => UserServiceAdmin.getById(userId),
		{
			onSuccess: data => {
				setValue('email', data.email)
				setValue('isAdmin', data.isAdmin)
			},
			enabled: !!userId
		}
	)
	const queryClient = useQueryClient()
	const { mutateAsync } = useMutation(
		['update user'],
		(data: IUserEditInput) => UserServiceAdmin.updateUser(userId, data),
		{
			async onSuccess() {
				Toast.show({
					type: 'success',
					text1: 'Update user',
					text2: 'update was successful'
				})
				await queryClient.invalidateQueries(['search users'])
			}
		}
	)
	const onSubmit = handleSubmit(async data => {
		await mutateAsync(data)
	})
	return { control, isLoading, onSubmit }
}
