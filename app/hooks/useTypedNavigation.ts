import { NavigationProp, useNavigation } from '@react-navigation/native'

import { TypeRootStackParamList } from '@/navigation/Navigation.types'

const useTypedNavigation =
	useNavigation<NavigationProp<TypeRootStackParamList>>()
