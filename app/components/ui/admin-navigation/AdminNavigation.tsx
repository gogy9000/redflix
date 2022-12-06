import React, { memo, useState } from 'react'
import { View } from 'react-native'

import BlurButton from '@/components/ui/blur-button/BlurButton'
import { HamburgerAnimation } from '@/components/ui/hamburger-animation/HamburgerAnimation'
import { Header } from '@/components/ui/layout/header/Header'

interface IAdminNavigationProps {
	title: string
}

export const AdminNavigation: React.FC<IAdminNavigationProps> = memo(
	({ title }) => {
		const [isShow, setIsShow] = useState(false)

		const onPress = () => {
			setIsShow(!isShow)
		}
		return (
			<View className={'flex-row justify-between'}>
				<Header title={title} isBackButton iconSize={45} />
				<BlurButton onPress={onPress} intensity={30}>
					<HamburgerAnimation isShow={isShow} />
				</BlurButton>
				<View
					className={
						'h-14 w-14 border-solid border-white z-10  absolute right-1 top-14'
					}
				>
					<View className={'h-5 w-10 '} />
					<View className={'h-5 w-10'} />
					<View className={'h-5 w-10'} />
					<View className={'h-5 w-10'} />
				</View>
			</View>
		)
	}
)
