import { AntDesign } from '@expo/vector-icons'
import React, { memo } from 'react'
import { useForm } from 'react-hook-form'
import { Image, Pressable, Text, View } from 'react-native'
import Animated from 'react-native-reanimated'

import { useEditProfile } from '@/components/screens/Profile/useEditProfile'
import Loader from '@/components/ui/Loader'
import { Button } from '@/components/ui/button/Button'
import { AuthFields } from '@/components/ui/form-elements/field/AuthFields'
import { Layout } from '@/components/ui/layout/Layout'
import { Header } from '@/components/ui/layout/header/Header'

import { useAuth } from '@/hooks/useAuth'
import { useScaleOnMount } from '@/hooks/useScaleOnMount'

import { AuthService } from '@/services/auth/auth.service'

import { IAuthFormData } from '@/shared/types/auth.interface'

export const Profile: React.FC = memo(() => {
	const { setUser } = useAuth()

	const { control, setValue, handleSubmit } = useForm<IAuthFormData>({
		mode: 'onChange'
	})

	const { onSubmit, isLoading } = useEditProfile(setValue)

	const { styleAnimation } = useScaleOnMount([])

	return (
		<Layout isHasPadding>
			<Header title={'Profile'} />
			<Animated.View style={styleAnimation} className={'my-6'}>
				<Image
					source={require('./avatar-guest.jpg')}
					className={'w-40 h-40 rounded'}
				/>
			</Animated.View>
			<>
				{isLoading ? (
					<Loader />
				) : (
					<View className={'mb-10'}>
						<AuthFields control={control} />
						<Button
							onPress={handleSubmit(onSubmit)}
							className={'mt-2 w-1/2 self-center'}
							icon={'edit'}
						>
							Update profile
						</Button>
					</View>
				)}
			</>
			<View className={'items-end'}>
				<Pressable
					onPress={() => {
						AuthService.logout().then(() => setUser(null))
					}}
					className={'py-2 opacity-50 flex-row items-center justify-center '}
				>
					<AntDesign name={'logout'} size={18} color='white' />
					<Text className='text-white text-lg ml-2'>Logout</Text>
				</Pressable>
			</View>
		</Layout>
	)
})
