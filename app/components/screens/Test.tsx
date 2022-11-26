import * as SecureStore from 'expo-secure-store'
import React, { memo } from 'react'
import { Text, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Button } from '@/components/ui/button/Button'

async function save(key: string, value: string) {
	await SecureStore.setItemAsync(key, value)
}
async function getValueFor(key: string) {
	let result = await SecureStore.getItemAsync(key)
	if (result) {
		alert("🔐 Here's your value 🔐 \n" + result)
	} else {
		alert('No values stored under that key.')
	}
}

interface ITestProps {}

export const Test: React.FC<ITestProps> = memo(({}) => {
	const [key, onChangeKey] = React.useState<string>('Your key here')
	const [value, onChangeValue] = React.useState<string>('Your value here')

	return (
		<SafeAreaView className={'flex-1 items-center justify-center'}>
			<Text className={'text-white'}>Save an item, and grab it later!</Text>
			<TextInput
				className={'bg-white'}
				onChangeText={e => {
					onChangeKey(e)
				}}
				placeholder='Enter the key'
				value={key}
			/>
			<TextInput
				className={'bg-white'}
				onChangeText={e => {
					onChangeValue(e)
				}}
				placeholder='Enter the value'
				value={value}
			/>
			<Button
				onPress={() => {
					save(key, value).catch(reason => {
						alert(reason.toString())
					})
					onChangeKey('Your key here')
					onChangeValue('Your value here')
				}}
			>
				Save this key/value pair
			</Button>

			<Text className={'bg-white'}>🔐 Enter your key 🔐</Text>
			<TextInput
				className={'bg-white'}
				onSubmitEditing={event => {
					getValueFor(event.nativeEvent.text)
				}}
				placeholder='Enter the key for the value you want to get'
			/>
		</SafeAreaView>
	)
})
