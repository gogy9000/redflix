import { useMutation, useQuery } from '@tanstack/react-query'
import Toast from 'react-native-toast-message'

import { ActorsListActions } from '@/components/screens/admin/actor/actor-list/ActorsListActions'
import { BodyType } from '@/components/ui/table/table.types'

import { useSearchForm } from '@/hooks/useSearchForm'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import { actorService } from '@/services/actor-services/actor.service'
import { ActorServiceAdmin } from '@/services/actor-services/admin/actor.service.admin'

export const useActorsList = () => {
	const { debouncedSearch, control } = useSearchForm()
	const { navigate } = useTypedNavigation()
	const { mutateAsync: onDeleteActor } = useMutation(
		['delete actor'],
		(actorId: string) => ActorServiceAdmin.delete(actorId),
		{
			onSuccess: async () => {
				Toast.show({
					type: 'success',
					text1: 'Delete actor',
					text2: 'delete was successful'
				})
				await queryData.refetch()
			}
		}
	)

	const queryData = useQuery(
		['search actors', debouncedSearch],
		() => actorService.getAll(debouncedSearch),
		{
			select: (data): BodyType => {
				return data.map(actor => [
					actor.name,
					actor.slug,
					<ActorsListActions
						onDeleteActor={onDeleteActor}
						navigate={navigate}
						actorId={actor._id}
					/>
				])
			}
		}
	)
	const { mutateAsync: onCreateActor } = useMutation(
		['create actor'],
		() => ActorServiceAdmin.create(),
		{
			onSuccess: async _id => {
				Toast.show({
					type: 'success',
					text1: 'Create actor',
					text2: 'create was successful'
				})
				navigate('ActorEdit', {
					id: _id
				})
				await queryData.refetch()
			}
		}
	)

	return { queryData, control, onCreateActor }
}
