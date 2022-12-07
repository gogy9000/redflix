import { RouteProp, useRoute } from '@react-navigation/native'

import { TypeRootStackParamList } from '@/navigation/Navigation.types'

export const useTypedRoute = <N extends keyof TypeRootStackParamList>() =>
	useRoute<RouteProp<TypeRootStackParamList, N>>()
