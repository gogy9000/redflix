import React, { memo, useCallback } from 'react'

import { TableActions } from '@/components/ui/table/table-actions/TableActions'

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
			<TableActions onDelete={onDelete} onNavigateEdit={onNavigateUserEdit} />
		)
	}
)
