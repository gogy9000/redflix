import { useQuery } from '@tanstack/react-query'
import React, { memo } from 'react'
import { Controller } from 'react-hook-form'
import { ScrollView, View } from 'react-native'

import { useMovieEdit } from '@/components/screens/admin/movie/movie-edit/useMovieEdit'
import { AdminNavigation } from '@/components/ui/admin-navigation/AdminNavigation'
import { Button } from '@/components/ui/button/Button'
import { DropDown } from '@/components/ui/form-elements/dropdown/DropDown'
import { Field } from '@/components/ui/form-elements/field/Field'
import { SlugWrapper } from '@/components/ui/form-elements/field/SlugWrapper'
import { UploadField } from '@/components/ui/form-elements/upload-field/UploadField'
import { Layout } from '@/components/ui/layout/Layout'

import { actorService } from '@/services/actor-services/actor.service'
import { genreService } from '@/services/genre-services/genre.service'

import { IMovieEditInput } from '@/shared/types/movies.interface'
import { generateSlug } from '@/utils/generateSlug'

export const MovieEdit: React.FC = memo(() => {
	const { control, isLoading, onSubmit, setValue, getValues } = useMovieEdit()
	const { data: genres } = useQuery(
		['List of genre'],
		() => genreService.getAll(),
		{
			select: data =>
				data.map(genre => ({
					label: genre.name,
					value: genre._id
				}))
		}
	)
	const { data: actors } = useQuery(
		['List of actor'],
		() => actorService.getAll(),
		{
			select: data =>
				data.map(actor => ({
					label: actor.name,
					value: actor._id
				}))
		}
	)
	return (
		<Layout isHasPadding isLoading={isLoading}>
			<AdminNavigation title={'Edit movie'} />
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{
					paddingBottom: 100
				}}
			>
				<Field<IMovieEditInput>
					control={control}
					name='title'
					placeholder='Enter name'
					rules={{
						required: 'Name is required!'
					}}
				/>

				<SlugWrapper
					generate={() => {
						setValue('slug', generateSlug(getValues('title')))
					}}
				>
					<Field<IMovieEditInput>
						control={control}
						name='slug'
						placeholder='Enter slug'
						rules={{
							required: 'Slug is required!'
						}}
					/>
				</SlugWrapper>

				<Field<IMovieEditInput>
					placeholder='Enter country'
					control={control}
					name='parameters.country'
					rules={{
						required: 'Country is required!'
					}}
				/>

				<View className='flex-row flex-wrap justify-between'>
					<View style={{ width: '56%' }}>
						<Field<IMovieEditInput>
							placeholder='Enter duration (min.)'
							control={control}
							name='parameters.duration'
							rules={{
								required: 'Duration is required!'
							}}
						/>
					</View>
					<View style={{ width: '40%' }}>
						<Field<IMovieEditInput>
							placeholder='Enter year'
							control={control}
							name='parameters.year'
							rules={{
								required: 'Year is required!'
							}}
							keyboardType='number-pad'
						/>
					</View>
				</View>

				<Controller
					control={control}
					name='genres'
					render={({ field, fieldState: { error } }) => (
						<DropDown
							field={field}
							options={genres}
							isMulti
							error={error}
							style={{
								zIndex: 11
							}}
						/>
					)}
					rules={{
						required: 'Please select at least one genre!'
					}}
				/>

				<Controller
					name='actors'
					control={control}
					rules={{
						required: 'Please dropdown at least one actor!'
					}}
					render={({ field, fieldState: { error } }) => (
						<DropDown field={field} options={actors} isMulti error={error} />
					)}
				/>

				<Controller
					control={control}
					name='poster'
					defaultValue=''
					render={({ field: { value, onChange }, fieldState: { error } }) => (
						<UploadField
							onChange={onChange}
							value={value}
							error={error}
							folder='movies'
							placeholder='Poster'
						/>
					)}
					rules={{
						required: 'Poster is required!'
					}}
				/>

				<Controller
					control={control}
					name='videoUrl'
					defaultValue=''
					render={({ field: { value, onChange }, fieldState: { error } }) => (
						<UploadField
							onChange={onChange}
							value={value}
							error={error}
							folder='movies'
							placeholder='Video'
							isNoImage
							gradient={['#4361a6', '#254584']}
						/>
					)}
					rules={{
						required: 'Video is required!'
					}}
				/>

				<Button onPress={onSubmit} icon='pen-tool'>
					Update
				</Button>
			</ScrollView>
		</Layout>
	)
})
