import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Components
import TableCellContainer from './tableCellContainer';

const TableRow = props => (
  <tr className={props.className}>
    <td className="row-number">{props.num}</td>
    {props.columns && props.columns.items && props.columns.items.map((column, i) => {
      let values = props.row.values,
          value  = values && values[column.id()] ? values[column.id()] : "";
      return (
        <TableCellContainer key={i} value={value} row={props.row} column={column} />
      );
    }, this)}
  </tr>
)

TableRow.propTypes = {
  num: PropTypes.number,              //number for the first cell in a row
  row: PropTypes.object.isRequired,   //row data
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps)(TableRow)
