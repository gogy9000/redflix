import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useQuery } from '@tanstack/react-query'
import { View } from 'react-native'

import { BodyType } from '@/components/ui/table/table.types'

import { useSearchForm } from '@/hooks/useSearchForm'

import { UserServiceAdmin } from '@/services/user/admin/user.service.admin'

export const useUsers = () => {
	const { debouncedSearch, control } = useSearchForm()

	const queryData = useQuery(
		['search movie', debouncedSearch],
		() => UserServiceAdmin.getAll(),
		{
			select: (data): BodyType => {
				return data.map(user => [
					user.email,
					new Date(user.createdAt).toLocaleDateString('ru'),
					<View className={'flex-row'}>
						<MaterialCommunityIcons
							name={'note-edit-outline'}
							color='#1DA64F'
							size={20}
						/>
						<MaterialCommunityIcons name={'close'} color='#AB2D2F' size={20} />
					</View>
				])
			}
		}
	)
	return { queryData, control }
}
