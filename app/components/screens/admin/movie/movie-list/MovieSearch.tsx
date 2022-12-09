import React, { memo } from 'react'
import { Control } from 'react-hook-form'
import { View } from 'react-native'

import { Button } from '@/components/ui/button/Button'
import { Field } from '@/components/ui/form-elements/field/Field'

import { ISearchFormData } from '@/shared/types/search.Interface'

interface IMovieSearchProps {
	control: Control<ISearchFormData>
	onCreateMovie: () => void
}

export const MovieSearch: React.FC<IMovieSearchProps> = memo(
	({ control, onCreateMovie }) => {
		return (
			<View className={'flex-row space-x-2'}>
				<Field<ISearchFormData> control={control} name={'searchTerm'} />
				<Button
					onPress={onCreateMovie}
					className={'my-1.5 rounded-2xl'}
					icon={'plus'}
					size={30}
				/>
			</View>
		)
	}
)
