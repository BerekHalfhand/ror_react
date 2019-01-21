import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import {Api} from '../middleware/api'

// Components
import TableCellContainer from './tableCellContainer';

const TableRow = props => (
  <tr>
    <td className="row-number">{props.num}</td>
    {props.columns.map((column, i) => {
      let values = props.row.values,
          value  = values && values[column.id] ? values[column.id] : ""; //0
      return (
        <TableCellContainer key={i} value={value} row={props.row} column={column} />
      );
    }, this)}
  </tr>
)

TableRow.propTypes = {
  num: PropTypes.number,              //number for the first cell in a row
  row: PropTypes.object.isRequired,   //row data
  columns: PropTypes.array,           //all the columns in the table
  //...
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(TableRow)
