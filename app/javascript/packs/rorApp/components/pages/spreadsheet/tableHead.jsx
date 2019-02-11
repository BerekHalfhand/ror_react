import React from 'react'
import { connect } from 'react-redux'

// Components
import TableCellContainer from './tableCellContainer'

const TableHead = props => (
  <tr className="font-weight-bold">
    <th>#</th>
    {props.columns && props.columns.items && props.columns.items.map((column, i) => {
      return (
        <TableCellContainer key={i} value={column.title} column={column} isHead={true} />
      )
    }, this)}
  </tr>
)

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps)(TableHead)
