import React, { memo, useState } from 'react'
import { ControllerRenderProps, FieldError } from 'react-hook-form'
import { Text, View, ViewStyle } from 'react-native'
import DropDownPicker, { ItemType } from 'react-native-dropdown-picker'

interface IDropDownProps {
	options?: ItemType<any>[]
	isMulti?: boolean
	field: ControllerRenderProps<any, any>
	error?: FieldError
	style?: ViewStyle
}
DropDownPicker.setTheme('DARK')
DropDownPicker.setListMode('SCROLLVIEW')

export const DropDown: React.FC<IDropDownProps> = memo(
	({ error, style, options = [], field, isMulti }) => {
		const [open, setOpen] = useState(false)
		const [value, setValue] = useState<string[] | null>(field.value)
		const [items, setItems] = useState(options)
		return (
			<View className='z-10' style={style}>
				<DropDownPicker
					open={open}
					value={value}
					items={items}
					setOpen={setOpen}
					setValue={setValue}
					setItems={setItems}
					onChangeValue={(value: any) => {
						if (value) field.onChange(value)
					}}
					multiple={isMulti}
					mode={'BADGE'}
					activityIndicatorColor='#BF3335'
					style={{
						backgroundColor: '#232323',
						borderColor: error ? 'red' : 'transparent',
						paddingHorizontal: 16,
						marginVertical: 6
					}}
					textStyle={{
						fontSize: 16
					}}
					placeholderStyle={{
						color: '#5A595D'
					}}
					dropDownContainerStyle={{
						backgroundColor: '#232323'
					}}
					showBadgeDot={false}
				/>
				{error ? <Text className='text-red'>{error.message}</Text> : null}
			</View>
		)
	}
)
