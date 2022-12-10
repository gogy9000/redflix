import { ClassValue } from 'clsx'
import React, { memo, useMemo } from 'react'
import { ScrollView, View } from 'react-native'

import { TableBody } from '@/components/ui/table/table-body/TableBody'
import { TableBodySkeleton } from '@/components/ui/table/table-body/TableBodySceleton'
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
	isLoading?: boolean
}
const defaultCell: CellType = ''
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
		bodyData = defaultBody,
		isLoading
	}) => {
		const tableBody = useMemo(
			() =>
				isLoading ? (
					<TableBodySkeleton
						classNameCellText={classNameBodyCellText}
						classNameCell={classNameBodyCell}
						classNameRow={classNameBodyRow}
						isLoading={isLoading}
					/>
				) : (
					<TableBody
						classNameRow={classNameBodyRow}
						classNameCell={classNameBodyCell}
						classNameCellText={classNameBodyCellText}
						bodyData={bodyData}
					/>
				),
			[isLoading, bodyData]
		)

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
					{tableBody}
				</View>
			</ScrollView>
		)
	}
)
