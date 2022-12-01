import { RouteProp, useRoute } from '@react-navigation/native'

import { TypeRootStackParamList } from '@/navigation/Navigation.types'

export const useTypedRoute = useRoute<RouteProp<TypeRootStackParamList>>
