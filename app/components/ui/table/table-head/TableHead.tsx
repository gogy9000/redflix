import cn, { ClassValue } from 'clsx'
import React, { memo, useMemo } from 'react'
import { View } from 'react-native'

import { TableRow } from '@/components/ui/table/table-row/TableRow'
import { RowType } from '@/components/ui/table/table.types'

interface ITableHeadProps {
	tableHeadData?: RowType
	ClassNameTableHeadRow?: ClassValue
	ClassNameTableHeadCell?: ClassValue
	classNameHeadCellText?: ClassValue
}

export const TableHead: React.FC<ITableHeadProps> = memo(
	({
		classNameHeadCellText,
		tableHeadData,
		ClassNameTableHeadCell,
		ClassNameTableHeadRow
	}) => {
		const classNameRow = useMemo(
			() => cn('bg-primary', ClassNameTableHeadRow),
			[ClassNameTableHeadRow]
		)
		return (
			<View className={'py-3.5'}>
				<TableRow
					tableRowData={tableHeadData}
					classNameCellText={classNameHeadCellText}
					classNameCell={ClassNameTableHeadCell}
					classNameRow={classNameRow}
				/>
			</View>
		)
	}
)
