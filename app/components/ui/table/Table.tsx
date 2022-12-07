import { ClassValue } from 'clsx'
import React, { memo } from 'react'
import { ScrollView, View } from 'react-native'

import { TableBody } from '@/components/ui/table/TableBody'
import { TableHead } from '@/components/ui/table/table-head/TableHead'
import { BodyType, CellType, RowType } from '@/components/ui/table/table.types'

interface ITableProps {
	headData?: RowType
	bodyData?: BodyType
	classNameHeadCell?: ClassValue
	classNameHeadCellText?: ClassValue
	classNameHeadRow?: ClassValue
	classNameBodyRow?: ClassValue
	classNameBodyCell?: ClassValue
	classNameBodyCellText?: ClassValue
}
const defaultCell: CellType = 'Some ddata'
const defaultRow: RowType = [defaultCell, defaultCell, defaultCell]
const defaultBody: BodyType = [defaultRow, defaultRow, defaultRow]

export const Table: React.FC<ITableProps> = memo(
	({
		classNameHeadCell,
		classNameHeadCellText,
		classNameBodyCell,
		classNameBodyCellText,
		classNameBodyRow,
		classNameHeadRow,
		headData = defaultRow,
		bodyData = defaultBody
	}) => {
		return (
			<ScrollView
				horizontal
				scrollEventThrottle={16}
				showsHorizontalScrollIndicator={false}
			>
				<View>
					<TableHead
						classNameHeadCellText={classNameHeadCellText}
						ClassNameTableHeadRow={classNameHeadRow}
						ClassNameTableHeadCell={classNameHeadCell}
						tableHeadData={headData}
					/>
					<TableBody
						classNameRow={classNameBodyRow}
						classNameCell={classNameBodyCell}
						classNameCellText={classNameBodyCellText}
						bodyData={bodyData}
					/>
				</View>
			</ScrollView>
		)
	}
)
