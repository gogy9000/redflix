import cn from 'clsx'
import React, { memo, useRef } from 'react'
import { FieldError } from 'react-hook-form'
import { ScrollView, Text, View } from 'react-native'
import { RichEditor, RichToolbar, actions } from 'react-native-pell-rich-editor'

interface ITextEditorProps {
	onChange: (...event: any[]) => void
	value: string
	error?: FieldError
	placeholder?: string
}

export const TextEditor: React.FC<ITextEditorProps> = memo(
	({ placeholder, error, onChange, value }) => {
		const richEditor = useRef<RichEditor>(null)
		return (
			<View>
				<View
					className={cn(
						'my-4 border flex-col-reverse w-full border-solid border-transparent rounded-xl overflow-hidden',
						{
							'border-red': !!error
						}
					)}
				>
					<ScrollView>
						<RichEditor
							ref={richEditor}
							onChange={onChange}
							placeholder={placeholder}
							initialHeight={200}
							editorStyle={{
								backgroundColor: 'rgba(34,34,34,.5)',
								color: 'white'
							}}
							initialContentHTML={value}
						/>
					</ScrollView>
					<RichToolbar
						editor={richEditor}
						actions={[
							actions.setBold,
							actions.setItalic,
							actions.insertLink,
							actions.setUnderline,
							actions.undo,
							actions.keyboard
						]}
						style={{
							backgroundColor: '#222'
						}}
						iconTint='white'
						selectedIconTint='#1DA64F'
					/>
				</View>
				{error && <Text className='text-red'>{error.message}</Text>}
			</View>
		)
	}
)
