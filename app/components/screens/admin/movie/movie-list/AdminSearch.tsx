import React, { memo } from 'react'
import { Control } from 'react-hook-form'
import { View } from 'react-native'

import { Button } from '@/components/ui/button/Button'
import { Field } from '@/components/ui/form-elements/field/Field'

import { ISearchFormData } from '@/shared/types/search.Interface'

interface IMovieSearchProps {
	control: Control<ISearchFormData>
	onPress?: () => void
}

export const AdminSearch: React.FC<IMovieSearchProps> = memo(
	({ control, onPress }) => {
		return (
			<View className={'flex-row space-x-2'}>
				<Field<ISearchFormData>
					placeholder={'Type something...'}
					viewClassName={'flex-1'}
					control={control}
					name={'searchTerm'}
				/>
				{onPress ? (
					<Button
						onPress={onPress}
						ViewClassName={'my-1.5 rounded-2xl'}
						icon={'plus'}
						size={30}
					/>
				) : null}
			</View>
		)
	}
)
