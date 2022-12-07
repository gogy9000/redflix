import { useIsFocused } from '@react-navigation/native'
import { BlurView } from 'expo-blur'
import React, { memo, useEffect, useMemo, useState } from 'react'
import { View } from 'react-native'
import Animated, { useAnimatedStyle, withSpring } from 'react-native-reanimated'

import { AdminNavigateItem } from '@/components/ui/admin-navigation/AdminNavigateItem'
import { adminNavItemsData } from '@/components/ui/admin-navigation/adminNavigation.data'
import BlurButton from '@/components/ui/blur-button/BlurButton'
import { HamburgerAnimation } from '@/components/ui/hamburger-animation/HamburgerAnimation'
import { Header } from '@/components/ui/layout/header/Header'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

interface IAdminNavigationProps {
	title: string
}

export const AdminNavigation: React.FC<IAdminNavigationProps> = memo(
	({ title }) => {
		const [isShow, setIsShow] = useState(false)
		const { navigate } = useTypedNavigation()
		const isFocused = useIsFocused()

		useEffect(() => {
			setIsShow(false)
		}, [isFocused])

		const onPress = () => {
			setIsShow(!isShow)
		}

		const translateXAnimation = useAnimatedStyle(
			() => ({
				transform: [
					{
						translateX: withSpring(isShow ? 0 : 165, {
							damping: 11.7
						})
					}
				]
			}),
			[isShow]
		)

		const mappedAdminNavItems = useMemo(
			() =>
				adminNavItemsData.map(item => (
					<AdminNavigateItem
						key={item.routeName}
						navigate={navigate}
						item={item}
					/>
				)),
			[adminNavItemsData]
		)

		return (
			<View className={'flex-row justify-between items-center z-10 mb-5'}>
				<Header title={title} iconSize={45} />
				<BlurButton onPress={onPress} intensity={30}>
					<HamburgerAnimation isShow={isShow} />
				</BlurButton>
				<Animated.View style={translateXAnimation}>
					<BlurView
						intensity={30}
						tint='default'
						className={'absolute z-10 right-0 top-14 rounded-2xl px-3.5 py-2.5'}
					>
						{mappedAdminNavItems}
					</BlurView>
				</Animated.View>
			</View>
		)
	}
)
