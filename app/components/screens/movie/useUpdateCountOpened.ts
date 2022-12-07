import { useMutation } from '@tanstack/react-query'

import { useTypedRoute } from '@/hooks/useTypedRoute'

import { movieService } from '@/services/movie.service'

export const useUpdateCountOpened = () => {
	const { params } = useTypedRoute<'Movie'>()

	const { mutate: update } = useMutation(['update count opened'], () =>
		movieService.updateCountOpened(params.slug)
	)

	return { update }
}
