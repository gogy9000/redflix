import { FC } from 'react'
import { Text } from 'react-native'

import { Layout } from '@/components/ui/layout/Layout'

export const Genre: FC = () => {
	return (
		<Layout isHasPadding>
			<Text className={'text-white'}>genre</Text>
		</Layout>
	)
}
