import Checkbox from 'expo-checkbox'
import React, { memo } from 'react'
import { Control, Controller } from 'react-hook-form'
import { Pressable, Text } from 'react-native'

import { useUserEdit } from '@/components/screens/admin/users/user-edit/useUserEdit'
import { AdminNavigation } from '@/components/ui/admin-navigation/AdminNavigation'
import { Button } from '@/components/ui/button/Button'
import { AuthFields } from '@/components/ui/form-elements/field/AuthFields'
import { Layout } from '@/components/ui/layout/Layout'

import { getColor } from '@/config/colors.config'
import { IAuthFormData } from '@/shared/types/auth.interface'

export const UserEdit: React.FC = memo(() => {
	const { control, isLoading, onSubmit } = useUserEdit()

	return (
		<Layout isHasPadding isLoading={isLoading}>
			<AdminNavigation title={'Edit user'} />
			<AuthFields control={control as unknown as Control<IAuthFormData>} />
			<Controller
				control={control}
				name={'isAdmin'}
				render={({ field: { value, onChange } }) => (
					<Pressable
						onPress={() => onChange(!value)}
						className={'flex-row justify-end space-x-3 my-5 items-center'}
					>
						<Checkbox
							value={value}
							onValueChange={onChange}
							color={value ? getColor('primary') : undefined}
						/>
						<Text className={'text-white text-base'}>Admin rights</Text>
					</Pressable>
				)}
			/>
			<Button onPress={onSubmit} icon={'pen-tool'}>
				Update
			</Button>
		</Layout>
	)
})
