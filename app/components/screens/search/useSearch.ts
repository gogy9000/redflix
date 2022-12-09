import { useQuery } from '@tanstack/react-query'

import { useSearchForm } from '@/hooks/useSearchForm'

import { movieService } from '@/services/movie-services/movie.service'

export const useSearch = () => {
	const { searchTerm, debouncedSearch, control } = useSearchForm()

	const { data: movies, isLoading } = useQuery(
		['search movie', debouncedSearch],
		() => movieService.getAll(debouncedSearch),
		{
			enabled: !!debouncedSearch
		}
	)
	return { movies, isLoading, control, searchTerm }
}
