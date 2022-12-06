import { TypeRootStackParamList } from '@/navigation/Navigation.types'
import { TypeMaterialIconNames } from '@/shared/types/icon.types'

export interface IAdminNavigationItem {
	title: string
	icon: TypeMaterialIconNames
	routeName: keyof TypeRootStackParamList
}
