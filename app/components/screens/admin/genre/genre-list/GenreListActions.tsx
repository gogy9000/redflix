import React, { memo, useCallback } from 'react'

import { TableActions } from '@/components/ui/table/table-actions/TableActions'

import { TypeRootStackParamList } from '@/navigation/Navigation.types'

interface IUsersActionProps {
	genreId: string
	navigate: (
		name: keyof TypeRootStackParamList,
		params: TypeRootStackParamList['GenreEdit']
	) => void
	onDeleteGenre: (genreId: string) => void
}

export const GenreListActions: React.FC<IUsersActionProps> = memo(
	({ genreId, navigate, onDeleteGenre }) => {
		const onNavigateGenreEdit = useCallback(
			() => navigate('GenreEdit', { id: genreId }),
			[genreId]
		)
		const onDelete = useCallback(() => {
			onDeleteGenre(genreId)
		}, [genreId])
		return (
			<TableActions onDelete={onDelete} onNavigateEdit={onNavigateGenreEdit} />
		)
	}
)
