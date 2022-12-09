import React, { memo } from 'react'
import { View } from 'react-native'

import { AnimatedMaterialCommunityIcons } from '@/components/ui/animated-icons/AnimatedMaterialCommunityIcons'

interface ITableActionsProps {
	onNavigateEdit: () => void
	onDelete: () => void
}

export const TableActions: React.FC<ITableActionsProps> = memo(
	({ onNavigateEdit, onDelete }) => {
		return (
			<View className={'flex-row space-x-3 self-center'}>
				<AnimatedMaterialCommunityIcons
					onPress={onNavigateEdit}
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
