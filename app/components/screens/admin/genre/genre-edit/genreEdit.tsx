import React, { memo } from 'react'

import { useGenreEdit } from '@/components/screens/admin/genre/genre-edit/useGenreEdit'
import { AdminNavigation } from '@/components/ui/admin-navigation/AdminNavigation'
import { Field } from '@/components/ui/form-elements/field/Field'
import { SlugWrapper } from '@/components/ui/form-elements/field/SlugWrapper'
import { Layout } from '@/components/ui/layout/Layout'

import { IGenreEditInput } from '@/shared/types/gengre.interface'
import { generateSlug } from '@/utils/generateSlug'

export const GenreEdit: React.FC = memo(() => {
	const { control, onSubmit, isLoading, setValue, getValues } = useGenreEdit()

	return (
		<Layout isHasPadding isLoading={isLoading}>
			<AdminNavigation title={'Genre'} />
			<Field<IGenreEditInput>
				placeholder={'Enter name'}
				name={'name'}
				control={control}
				rules={{ required: 'Name is required' }}
			/>
			<SlugWrapper
				generate={() => {
					setValue('slug', generateSlug(getValues('name')))
				}}
			>
				<Field
					control={control}
					name={'slug'}
					placeholder={'Enter slug'}
					rules={{ required: 'Slug is required' }}
				/>
			</SlugWrapper>
		</Layout>
	)
})
