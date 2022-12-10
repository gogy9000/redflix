export interface IUser {
	_id: string
	email: string
	password: string
	createdAt: string
	isAdmin: boolean
}
export interface IGetProfileResponse extends IUser {
	updatedAt: string
	favorites: any[]
}
export interface IUserEditInput extends Omit<IUser, '_id' | 'createdAt'> {}
