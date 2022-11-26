import { TypeRootStackParamList } from '@/navigation/Navigation.types'
import { TypeFeatherIconNames } from '@/shared/types/icon.types'

export interface IMenuItem {
	iconName: TypeFeatherIconNames
	path: keyof TypeRootStackParamList
}
export type TypeNavigate = (name: keyof TypeRootStackParamList) => void
