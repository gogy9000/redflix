import cn from 'clsx'
import React, { memo } from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { MenuItem } from '@/components/ui/layout/bottom-menu/MenuItem'
import { menuItems } from '@/components/ui/layout/bottom-menu/bottom-menu-data'
import { TypeNavigate } from '@/components/ui/layout/bottom-menu/bottom-menu.interface'

interface IBottomMenuProps {
	navigate: TypeNavigate
	currentRoute?: string
}

export const BottomMenu: React.FC<IBottomMenuProps> = memo(
	({ navigate, currentRoute }) => {
		const { bottom } = useSafeAreaInsets()
		return (
			<View
				className={cn(
					'pt-5 px-2 flex-row justify-between items-center w-full  bg-[#090909]',
					currentRoute === 'VideoPlayer' && 'bg-black'
				)}
				style={{ paddingBottom: bottom + 5 }}
			>
				{menuItems.map(item => (
					<MenuItem
						key={item.path}
						item={item}
						navigate={navigate}
						currentRoute={currentRoute}
					/>
				))}
			</View>
		)
	}
)
