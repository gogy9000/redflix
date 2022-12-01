import cn from 'clsx'
import React, { memo } from 'react'
import { Text } from 'react-native'

interface IHeaderProps {
	title: string
	className?: string
}

export const Header: React.FC<IHeaderProps> = memo(({ className, title }) => {
	return (
		<Text
			className={cn(
				'ml-3 text-white text-opacity-80 font-semibold text-3xl',
				className
			)}
			numberOfLines={1}
		>
			{title}
		</Text>
	)
})
