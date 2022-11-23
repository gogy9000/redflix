import { ComponentType } from 'react'

export type TypeRootStackParamList = {
	Home: undefined
	Auth: undefined
	Settings: undefined
} & AdminRootStackParamList
type AdminRootStackParamList = {
	Admin: undefined
}
export interface IRoute {
	name: keyof TypeRootStackParamList
	component: ComponentType
	isAdmin?: boolean
}
