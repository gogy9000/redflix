import { ClassValue } from 'clsx'
import React, { memo, useMemo } from 'react'
import { ScrollView } from 'react-native'

import { TableRow } from '@/components/ui/table/table-row/TableRow'
import { BodyType } from '@/components/ui/table/table.types'

interface ITableBodyProps {
	bodyData?: BodyType
	classNameCell?: ClassValue
	classNameCellText?: ClassValue
	classNameRow?: ClassValue
}

export const TableBody: React.FC<ITableBodyProps> = memo(
	({ classNameCell, classNameCellText, classNameRow, bodyData = [] }) => {
		const mappedRow = useMemo(
			() =>
				bodyData.map((item, index) => (
					<TableRow
						key={index + Date.now()}
						classNameCell={classNameCell}
						classNameCellText={classNameCellText}
						classNameRow={classNameRow}
						tableRowData={item}
					/>
				)),
			[bodyData, classNameCellText, classNameRow, classNameCell]
		)

		return (
			<ScrollView showsVerticalScrollIndicator={false} scrollEventThrottle={16}>
				{mappedRow}
			</ScrollView>
		)
	}
)
