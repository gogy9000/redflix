import cn, { ClassValue } from 'clsx'
import React, { memo, useMemo } from 'react'
import { ViewStyle } from 'react-native'
import Animated from 'react-native-reanimated'

import { TableCell } from '@/components/ui/table/table-cell/TableCell'
import { RowType } from '@/components/ui/table/table.types'

interface ITableHeadProps {
	tableRowData?: RowType
	classNameRow?: ClassValue
	classNameCell?: ClassValue
	classNameCellText?: ClassValue
	animatedStyle?: ViewStyle
}

export const TableRow: React.FC<ITableHeadProps> = memo(
	({
		tableRowData = ['some data', 'some data', 'some data'],
		classNameRow,
		classNameCell,
		classNameCellText,
		animatedStyle
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
			[
				tableRowData,
				classNameRow,
				classNameCell,
				classNameCellText,
				animatedStyle
			]
		)

		return (
			<Animated.View
				style={animatedStyle}
				className={cn('flex-row h-12 bg-gray rounded-xl mb-2', classNameRow)}
			>
				{mappedCells}
			</Animated.View>
		)
	}
)
