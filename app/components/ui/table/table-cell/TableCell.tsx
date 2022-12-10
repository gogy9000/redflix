import cn, { ClassValue } from 'clsx'
import React, { memo, useMemo } from 'react'
import { Text, View } from 'react-native'

import { CellType } from '@/components/ui/table/table.types'

interface ITableCellProps {
	cellData?: CellType
	classNameCell?: ClassValue
	classNameCellText?: ClassValue
}

export const TableCell: React.FC<ITableCellProps> = memo(
	({ classNameCellText, classNameCell, cellData = 'Some data' }) => {
		const cell = useMemo(() => {
			if (typeof cellData === 'string') {
				return (
					<Text
						className={cn(
							'text-white text-base font-semibold ',
							classNameCellText
						)}
						numberOfLines={1}
					>
						{cellData}
					</Text>
				)
			} else {
				return cellData
			}
		}, [cellData, classNameCellText, classNameCell])

		return (
			<View
				className={cn(
					'flex-1 my-0.5  px-3 border-r-0.5  items-start justify-center',
					classNameCell
				)}
			>
				{cell}
			</View>
		)
	}
)
