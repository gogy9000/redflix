import { MaterialIcons } from '@expo/vector-icons'
import React, { memo, useCallback } from 'react'
import { Pressable } from 'react-native'

import { useAuth } from '@/hooks/useAuth'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'

export const AdminButton: React.FC = memo(() => {
	const { navigate } = useTypedNavigation()
	const { user } = useAuth()
	if (!user?.isAdmin) {
		return null
	}
	const onPress = useCallback(() => {
		navigate('Admin')
	}, [])
	return (
		<Pressable
			onPress={onPress}
			className={
				'bg-[#090909] absolute -right-2.5 bottom-14 z-10 py-2 px-3.5 rounded-tl-2xl rounded-bl-2xl border-2 border-solid border-gray-500'
			}
		>
			<MaterialIcons size={32} name={'admin-panel-settings'} color='#5D5D5D' />
		</Pressable>
	)
})
