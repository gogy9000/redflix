import { IRoute } from '@/navigation/Navigation.types'
import { adminRoutes } from '@/navigation/routes/Admin.routes'
import { userRoutes } from '@/navigation/routes/User.routes'

export const routes: IRoute[] = [...userRoutes, ...adminRoutes]
