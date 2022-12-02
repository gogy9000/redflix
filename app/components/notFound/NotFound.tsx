import React, { memo } from 'react'
import { View } from 'react-native'

import { Header } from '@/components/ui/layout/header/Header'

export const NotFound: React.FC = memo(() => {
	return (
		<View>
			<Header title='404 - Page Not Found' />
		</View>
	)
})
