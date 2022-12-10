import React, { PropsWithChildren, memo } from 'react'
import { Pressable, Text, View } from 'react-native'

interface ISlugWrapperProps {
	generate: () => void
}

export const SlugWrapper: React.FC<PropsWithChildren<ISlugWrapperProps>> = memo(
	({ generate, children }) => {
		return (
			<View>
				{children}
				<Pressable
					onPress={generate}
					className={
						'absolute top-5 right-3 cursor-pointer rounded-lg py-0.5 px-2 border-gray-500 bg-gray-500'
					}
				>
					<Text className='uppercase text-white'>generate</Text>
				</Pressable>
			</View>
		)
	}
)
