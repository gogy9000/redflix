import React, { memo, useCallback } from 'react'

import { TableActions } from '@/components/ui/table/table-actions/TableActions'

import { TypeRootStackParamList } from '@/navigation/Navigation.types'

interface IActorsListActionsProps {
	actorId: string
	navigate: (
		name: keyof TypeRootStackParamList,
		params: TypeRootStackParamList['ActorEdit']
	) => void
	onDeleteActor: (actorId: string) => void
}

export const ActorsListActions: React.FC<IActorsListActionsProps> = memo(
	({ actorId, navigate, onDeleteActor }) => {
		const onNavigateActorEdit = useCallback(
			() => navigate('ActorEdit', { id: actorId }),
			[actorId]
		)
		const onDelete = useCallback(() => {
			onDeleteActor(actorId)
		}, [actorId])
		return (
			<TableActions onDelete={onDelete} onNavigateEdit={onNavigateActorEdit} />
		)
	}
)
