import React, { memo } from 'react'
import { Controller } from 'react-hook-form'

import { useGenreEdit } from '@/components/screens/admin/genre/genre-edit/useGenreEdit'
import { AdminNavigation } from '@/components/ui/admin-navigation/AdminNavigation'
import { Button } from '@/components/ui/button/Button'
import { TextEditor } from '@/components/ui/form-elements/Text-editor/TextEditor'
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
				<Field<IGenreEditInput>
					control={control}
					name={'slug'}
					placeholder={'Enter slug'}
					rules={{ required: 'Slug is required' }}
				/>
			</SlugWrapper>
			<Controller
				control={control}
				name={'description'}
				defaultValue={''}
				render={({ field: { value, onChange }, fieldState: { error } }) => (
					<TextEditor
						onChange={onChange}
						value={value}
						error={error}
						placeholder={'Enter description here'}
					/>
				)}
				rules={{
					validate: {
						required: value => {
							const replaceHTML = value.replace(/<(.|\n)*?>/g, '').trim()
							const replaceWhiteSpace = replaceHTML
								.replace(/&nbsp;/g, '')
								.trim()

							return replaceWhiteSpace.length > 0 || 'Description is required!'
						}
					}
				}}
			/>
			<Button onPress={onSubmit} icon='pen-tool'>
				Update
			</Button>
		</Layout>
	)
})
