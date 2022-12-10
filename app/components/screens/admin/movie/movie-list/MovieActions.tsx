import React, { memo, useCallback } from 'react'

import { TableActions } from '@/components/ui/table/table-actions/TableActions'

import { TypeRootStackParamList } from '@/navigation/Navigation.types'

interface IMovieActionsProps {
	movieId: string
	navigate: (
		name: keyof TypeRootStackParamList,
		params: TypeRootStackParamList['MovieEdit']
	) => void
	onDeleteMovie: (userId: string) => void
}

export const MovieActions: React.FC<IMovieActionsProps> = memo(
	({ movieId, navigate, onDeleteMovie }) => {
		const onNavigateUserEdit = useCallback(
			() => navigate('MovieEdit', { id: movieId }),
			[movieId]
		)
		const onDelete = useCallback(() => {
			onDeleteMovie(movieId)
		}, [movieId])
		return (
			<TableActions onDelete={onDelete} onNavigateEdit={onNavigateUserEdit} />
		)
	}
)
