import cn, { ClassValue } from 'clsx'
import React, { memo, useMemo } from 'react'
import { View } from 'react-native'

import { TableCell } from '@/components/ui/table/table-cell/TableCell'
import { RowType } from '@/components/ui/table/table.types'

interface ITableHeadProps {
	tableRowData?: RowType
	classNameRow?: ClassValue
	classNameCell?: ClassValue
	classNameCellText?: ClassValue
}

export const TableRow: React.FC<ITableHeadProps> = memo(
	({
		tableRowData = ['some data', 'some data', 'some data'],
		classNameRow,
		classNameCell,
		classNameCellText
	}) => {
		const mappedCells = useMemo(
			() =>
				tableRowData.map((cellData, index) => (
					<TableCell
						classNameCellText={classNameCellText}
						classNameCell={classNameCell}
						key={index + Date.now()}
						cellData={cellData}
					/>
				)),
			[tableRowData, classNameCellText, classNameCell]
		)

		return (
			<View
				className={cn('flex-row h-12 bg-gray rounded-xl mb-2', classNameRow)}
			>
				{mappedCells}
			</View>
		)
	}
)
