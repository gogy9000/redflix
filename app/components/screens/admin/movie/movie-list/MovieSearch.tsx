import React, { memo } from 'react'
import { Control } from 'react-hook-form'
import { View } from 'react-native'

import { Field } from '@/components/ui/form-elements/field/Field'

import { ISearchFormData } from '@/shared/types/search.Interface'

interface IMovieSearchProps {
	control: Control<ISearchFormData>
}

export const MovieSearch: React.FC<IMovieSearchProps> = memo(({ control }) => {
	return (
		<View>
			<Field<ISearchFormData> control={control} name={'searchTerm'} />
		</View>
	)
})
