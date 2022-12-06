import React, { memo } from 'react'

import { Statistics } from '@/components/screens/admin/Statistics'
import { AdminNavigation } from '@/components/ui/admin-navigation/AdminNavigation'
import { Layout } from '@/components/ui/layout/Layout'

export const Admin: React.FC = memo(() => {
	return (
		<Layout isHasPadding>
			<AdminNavigation title={'Statistics'} />
			<Statistics />
		</Layout>
	)
})
