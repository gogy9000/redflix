import { MaterialIcons } from '@expo/vector-icons'
import cn from 'clsx'
import React, { memo } from 'react'
import { Pressable, Text } from 'react-native'

import { IAdminNavigationItem } from '@/components/ui/admin-navigation/adminNavigation.interface'
import { TypeNavigate } from '@/components/ui/layout/bottom-menu/bottom-menu.interface'

import { useTypedRoute } from '@/hooks/useTypedRoute'

interface IAdminNavigateItemProps {
	item: IAdminNavigationItem
	navigate: TypeNavigate
}

export const AdminNavigateItem: React.FC<IAdminNavigateItemProps> = memo(
	({ item: { icon, title, routeName }, navigate }) => {
		const { name } = useTypedRoute<IAdminNavigationItem['routeName']>()
		const onPress = () => navigate(routeName)
		return (
			<Pressable onPress={onPress} className={'flex-row items-center mb-1'}>
				<MaterialIcons
					name={icon}
					size={18}
					color={name === routeName ? '#D73033' : '#666'}
				/>
				<Text
					className={cn('text-xl text-[#D1D1D1] ml-2', {
						'text-[#D73033] font-medium': name === routeName
					})}
				>
					{title}
				</Text>
			</Pressable>
		)
	}
)
