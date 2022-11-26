import { View } from 'nativewind/dist/preflight'
import React, { memo, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Pressable, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Button } from '@/components/ui/button/Button'
import { AuthFields } from '@/components/ui/form-elements/field/AuthFields'
import { DismissKeyBoard } from '@/components/ui/form-elements/field/DismissKeyBoard'

import { IAuthFormData } from '@/shared/types/auth.interface'

interface IAuthProps {}

export const Auth: React.FC<IAuthProps> = memo(({}) => {
	const [isReg, setIsReg] = useState(false)
	const { control, handleSubmit } = useForm<IAuthFormData>({
		mode: 'onChange'
	})
	const onSubmit: SubmitHandler<IAuthFormData> = data => {
		console.log(data)
	}

	return (
		<DismissKeyBoard>
			<SafeAreaView className={'flex-1  items-center justify-center px-10'}>
				<View className={'w-full items-center'}>
					<Text className={'mb-3 text-4xl text-white font-bold'}>
						{isReg ? 'Register' : 'Login'}
					</Text>

					<AuthFields control={control} isPassRequired />

					<Button
						onPress={handleSubmit(onSubmit)}
						icon={'film'}
						className={'w-3/4 mt-3 py-4 rounded-xl'}
					>
						Go to watch
					</Button>
					<Pressable
						className={'mt-3 self-end py-3 px-3'}
						onPress={() => setIsReg(!isReg)}
					>
						<Text className={'text-white opacity-50 font-semibold text-md'}>
							{isReg ? 'Login' : 'Register'}
						</Text>
					</Pressable>
				</View>
			</SafeAreaView>
		</DismissKeyBoard>
	)
})
