import React, { memo } from 'react'
import { Control } from 'react-hook-form'

import { Field } from '@/components/ui/form-elements/field/Field'

import { ISearchFormData } from '@/shared/types/search.Interface'

interface ISearchUserProps {
	control: Control<ISearchFormData>
}

export const UserSearch: React.FC<ISearchUserProps> = memo(({ control }) => {
	return (
		<Field<ISearchFormData>
			keyboardType={'web-search'}
			placeholder='Type something...'
			control={control}
			name={'searchTerm'}
		/>
	)
})
