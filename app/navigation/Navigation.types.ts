import { ComponentType } from 'react'

export type TypeRootStackParamList = {
	Home: undefined
	Auth: undefined
	Settings: undefined
	Test: undefined
	Profile: undefined
	Favorites: undefined
	Trending: undefined
	Search: undefined
	Screen404: undefined
	Movie: { slug: string }
	Genre: { slug: string }
	Actor: { slug: string }
	VideoPlayer: { videoUrl: string; title: string }
} & AdminRootStackParamList
type AdminRootStackParamList = {
	Admin: undefined
}
export interface IRoute {
	name: keyof TypeRootStackParamList
	component: ComponentType
	isAdmin?: boolean
}
