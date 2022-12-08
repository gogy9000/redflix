import { useMutation, useQuery } from '@tanstack/react-query'
import Toast from 'react-native-toast-message'

import { UsersAction } from '@/components/screens/admin/users/user-list/UsersAction'
import { BodyType } from '@/components/ui/table/table.types'

import { useSearchForm } from '@/hooks/useSearchForm'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import { UserServiceAdmin } from '@/services/user/admin/user.service.admin'

export const useUsers = () => {
	const { debouncedSearch, control } = useSearchForm()
	const { navigate } = useTypedNavigation()
	const { mutateAsync: onDeleteUser } = useMutation(
		['delete user'],
		(userId: string) => UserServiceAdmin.deleteUser(userId),
		{
			onSuccess: async () => {
				Toast.show({
					type: 'success',
					text1: 'Delete user',
					text2: 'delete was successful'
				})

				await queryData.refetch()
			}
		}
	)
	const queryData = useQuery(
		['search movie', debouncedSearch],
		() => UserServiceAdmin.getAll(debouncedSearch),
		{
			select: (data): BodyType => {
				return data.map(user => [
					user.email,
					new Date(user.createdAt).toLocaleDateString('ru'),
					<UsersAction
						userId={user._id}
						onDeleteUser={onDeleteUser}
						navigate={navigate}
					/>
				])
			}
		}
	)
	return { queryData, control }
}
