import cn from 'clsx'
import React from 'react'
import { Controller } from 'react-hook-form'
import { Text, TextInput, View } from 'react-native'

import { IFieldProps } from '@/components/ui/form-elements/field/field.interface'

export const Field = <T extends Record<string, any>>({
	control,
	rules,
	name,
	...rest
}: IFieldProps<T>): JSX.Element => {
	return (
		<Controller
			control={control}
			rules={rules}
			name={name}
			render={({
				field: { value, onChange, onBlur },
				fieldState: { error }
			}) => (
				<>
					<View
						className={cn(
							'bg-[#232323] w-full border rounded-lg pb-4 pt-2.5 px-4 my-1.5',
							error ? 'border-red' : 'border-transparent'
						)}
					>
						<TextInput
							placeholder={'Enter email'}
							placeholderTextColor={'grey'}
							autoCapitalize={'none'}
							onChangeText={onChange}
							onBlur={onBlur}
							value={(value || '').toString()}
							className='text-white text-base'
							{...rest}
						/>
					</View>
					{error ? <Text className={'text-red'}>{error.message}</Text> : null}
				</>
			)}
		/>
	)
}
