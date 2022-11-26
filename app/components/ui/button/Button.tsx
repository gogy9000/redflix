import { Feather } from '@expo/vector-icons'
import cn from 'clsx'
import React, { PropsWithChildren, memo } from 'react'
import { Pressable, PressableProps, Text } from 'react-native'

import { TypeFeatherIconNames } from '@/shared/types/icon.types'

interface IButtonProps extends PressableProps {
	className?: string
	textClassName?: string
	icon?: TypeFeatherIconNames
}

export const Button: React.FC<PropsWithChildren<IButtonProps>> = memo(
	({ children, className, icon, textClassName, ...rest }) => {
		return (
			<Pressable
				className={cn(
					'items-center justify-center flex-row bg-red rounded-lg w-full  py-1 px-3',

					className
				)}
				{...rest}
			>
				{icon && <Feather name={icon} size={18} color='white' />}
				<Text
					className={cn(' text-white text-lg', textClassName, {
						'ml-2': !!icon
					})}
				>
					{children}
				</Text>
			</Pressable>
		)
	}
)
