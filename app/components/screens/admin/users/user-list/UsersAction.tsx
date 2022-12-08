import React, { memo, useCallback } from 'react'
import { View } from 'react-native'

import { AnimatedMaterialCommunityIcons } from '@/components/ui/animated-icons/AnimatedMaterialCommunityIcons'

import { TypeRootStackParamList } from '@/navigation/Navigation.types'

interface IUsersActionProps {
	userId: string
	navigate: (
		name: keyof TypeRootStackParamList,
		params: TypeRootStackParamList['UserEdit']
	) => void
	onDeleteUser: (userId: string) => void
}

export const UsersAction: React.FC<IUsersActionProps> = memo(
	({ userId, navigate, onDeleteUser }) => {
		const onNavigateUserEdit = useCallback(
			() => navigate('UserEdit', { id: userId }),
			[userId]
		)
		const onDelete = useCallback(() => {
			onDeleteUser(userId)
		}, [userId])
		return (
			<View className={'flex-row space-x-3 self-center'}>
				<AnimatedMaterialCommunityIcons
					onPress={onNavigateUserEdit}
					name={'note-edit-outline'}
					size={30}
					color={'#1DA64F'}
				/>
				<AnimatedMaterialCommunityIcons
					onPress={onDelete}
					name={'close'}
					color='#AB2D2F'
					size={30}
				/>
			</View>
		)
	}
)
