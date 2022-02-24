import React, { useMemo } from 'react'
import { useBlockLayout, useTable } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './columns'
import Styles from './UserElements'

import './style.css'

const UserTable = () => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
        columns,
        data,
    },
        useBlockLayout,
    )

    return (
        <div>
            <Styles>
                <div {...getTableProps()} className="table sticky" style={{ width: 316, height: '60vw' }}>
                    
                    <div {...getTableBodyProps()} className="body">
                        {rows.map((row) => {
                            prepareRow(row);
                            return (
                                <div {...row.getRowProps()} className="tr">
                                    {row.cells.map((cell) => (
                                        <div {...cell.getCellProps()} className="td">
                                            {cell.render('Cell')}
                                        </div>
                                    ))}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Styles>
        </div>
    )
}

export default UserTable