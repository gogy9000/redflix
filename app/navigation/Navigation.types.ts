import { ComponentType } from 'react'

import { IActor } from '@/shared/types/actor.interface'

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
	Actor: { actor: IActor }
	VideoPlayer: { videoUrl: string; title: string }
} & AdminRootStackParamList
type AdminRootStackParamList = {
	Admin: undefined
	ActorEdit: { id: string }
	ActorsList: undefined
	GenreEdit: { id: string }
	GenresList: undefined
	MovieEdit: { id: string }
	MoviesList: undefined
	Users: undefined
	UserEdit: { id: string }
}
export interface IRoute {
	name: keyof TypeRootStackParamList
	component: ComponentType
	isAdmin?: boolean
}
