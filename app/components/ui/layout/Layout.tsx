import cn from 'clsx'
import React, { PropsWithChildren, memo } from 'react'
import { Platform, View, ViewStyle } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'

import Loader from '@/components/ui/Loader'

interface ILayout {
	className?: string
	style?: ViewStyle
	isHasPadding?: boolean
	isLoading?: boolean
}

export const Layout: React.FC<PropsWithChildren<ILayout>> = memo(
	({ className, style, isHasPadding, children, isLoading }) => {
		const { top } = useSafeAreaInsets()
		return (
			<SafeAreaView className='flex-1'>
				<View
					className={cn('flex-1', className, {
						'px-6': isHasPadding
					})}
					style={[
						{
							paddingTop: Platform.OS === 'ios' ? top / 6 : top * 0.3
						},
						style
					]}
				>
					{isLoading ? <Loader /> : children}
				</View>
			</SafeAreaView>
		)
	}
)
