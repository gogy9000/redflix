import { useMutation, useQuery } from '@tanstack/react-query'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import Toast from 'react-native-toast-message'

import { userService } from '@/services/user/user.service'

import { IAuthFormData } from '@/shared/types/auth.interface'

export const useEditProfile = (setValue: UseFormSetValue<IAuthFormData>) => {
	const { isLoading } = useQuery(['Profile'], () => userService.getProfile(), {
		onSuccess({ email }) {
			setValue('email', email)
		}
	})
	const { mutateAsync, isLoading: updateIsLoading } = useMutation(
		['Update profile'],
		(data: IAuthFormData) => userService.updateProfile(data),
		{
			onSuccess() {
				Toast.show({
					text1: 'Update profile',
					text2: 'update was successful',
					type: 'success'
				})
			}
		}
	)
	const onSubmit: SubmitHandler<IAuthFormData> = async data => {
		await mutateAsync(data)
	}

	return { onSubmit, isLoading: isLoading || updateIsLoading }
}
