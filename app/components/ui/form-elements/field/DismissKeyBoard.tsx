import React, { PropsWithChildren, memo } from 'react'
import {
	Keyboard,
	TouchableWithoutFeedback,
	View,
	ViewProps
} from 'react-native'

export const DismissKeyBoard: React.FC<PropsWithChildren<ViewProps>> = memo(
	({ children, ...rest }) => {
		return (
			<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
				<View style={{ flex: 1 }} {...rest}>
					{children}
				</View>
			</TouchableWithoutFeedback>
		)
	}
)
