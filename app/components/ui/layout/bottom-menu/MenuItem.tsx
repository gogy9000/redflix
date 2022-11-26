import { Feather } from '@expo/vector-icons'
import React, { memo } from 'react'
import { Pressable } from 'react-native'

import {
	IMenuItem,
	TypeNavigate
} from '@/components/ui/layout/bottom-menu/bottom-menu.interface'

import { getColor } from '@/config/colors.config'

interface IMenuItemProps {
	item: IMenuItem
	navigate: TypeNavigate
	currentRoute?: string
}

export const MenuItem: React.FC<IMenuItemProps> = memo(
	({ item, currentRoute, navigate }) => {
		const isActive = currentRoute === item.path
		return (
			<Pressable
				className='items-center w-[20%]'
				onPress={() => navigate(item.path)}
			>
				<Feather
					name={item.iconName}
					size={26}
					color={isActive ? getColor('primary') : getColor('gray.400')}
				/>
			</Pressable>
		)
	}
)
