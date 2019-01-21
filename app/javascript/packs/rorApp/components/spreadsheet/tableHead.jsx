import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import {Api} from '../middleware/api'

// Components
import TableCellContainer from './tableCellContainer';

const TableHead = props => (
  <tr className="font-weight-bold">
    <th>#</th>
    {props.columns && props.columns.map((column, i) => {
      return (
        <TableCellContainer key={i} value={column.title} column={column} isHead={true} />
      );
    }, this)}
  </tr>
)

TableHead.propTypes = {
  columns: PropTypes.array,           //all the columns in the table
  //...
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(TableHead)
