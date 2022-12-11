import React, { memo } from 'react'
import { Controller } from 'react-hook-form'
import { ScrollView } from 'react-native'

import { useActorEdit } from '@/components/screens/admin/actor/actor-edit/useActorEdit'
import { AdminNavigation } from '@/components/ui/admin-navigation/AdminNavigation'
import { Button } from '@/components/ui/button/Button'
import { Field } from '@/components/ui/form-elements/field/Field'
import { SlugWrapper } from '@/components/ui/form-elements/field/SlugWrapper'
import { UploadField } from '@/components/ui/form-elements/upload-field/UploadField'
import { Layout } from '@/components/ui/layout/Layout'

import { IActorEditInput } from '@/shared/types/actor.interface'
import { generateSlug } from '@/utils/generateSlug'

export const ActorEdit: React.FC = memo(() => {
	const { control, isLoading, onSubmit, setValue, getValues } = useActorEdit()
	return (
		<Layout isHasPadding isLoading={isLoading}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<AdminNavigation title={'Actor edit'} />
				<Field<IActorEditInput>
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
					<Field<IActorEditInput>
						control={control}
						name={'slug'}
						placeholder={'Enter slug'}
						rules={{ required: 'Slug is required' }}
					/>
				</SlugWrapper>
				<Controller
					control={control}
					name='photo'
					defaultValue=''
					render={({ field: { value, onChange }, fieldState: { error } }) => (
						<UploadField
							onChange={onChange}
							value={value}
							error={error}
							folder='actors'
							placeholder='Photo'
						/>
					)}
					rules={{
						required: 'Photo is required!'
					}}
				/>
				<Button onPress={onSubmit} icon='pen-tool'>
					Update
				</Button>
			</ScrollView>
		</Layout>
	)
})
