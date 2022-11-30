import { NavigationProp, useNavigation } from '@react-navigation/native'

import { TypeRootStackParamList } from '@/navigation/Navigation.types'

export const useTypedNavigation = () =>
	useNavigation<NavigationProp<TypeRootStackParamList>>()
