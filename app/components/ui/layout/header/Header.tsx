import { Ionicons } from '@expo/vector-icons'
import cn from 'clsx'
import React, { memo } from 'react'
import { Pressable, Text, TextStyle, View } from 'react-native'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

interface IHeaderProps {
	title?: string
	className?: string
	style?: TextStyle
	isAbsolute?: boolean
	isBackButton?: boolean
}

export const Header: React.FC<IHeaderProps> = memo(
	({ className, title, style, isAbsolute, isBackButton }) => {
		const { goBack } = useTypedNavigation()
		return (
			<View className='flex-row items-center justify-between'>
				<Text
					className={cn(
						'ml-3 text-white text-opacity-80 font-semibold text-3xl',
						isAbsolute && `absolute z-1 top-3`,
						className
					)}
					numberOfLines={1}
					{...style}
				>
					{!!title ? title : null}
				</Text>
				{isBackButton && (
					<Pressable
						className={'mr-3 absolute top-3 z-1 right-1'}
						onPress={goBack}
					>
						<Ionicons
							name='arrow-back-circle-outline'
							size={32}
							color='white'
						/>
					</Pressable>
				)}
			</View>
		)
	}
)
