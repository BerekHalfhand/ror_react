import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
// import {Api} from '../middleware/api'

// Components
import TableCellContainer from './tableCellContainer';

export default class TableRow extends React.Component {
  static propTypes = {
    num: PropTypes.number,              //number for the first cell in a row
    row: PropTypes.object.isRequired,   //row data
    columns: PropTypes.array,           //all the columns in the table
  }

  constructor(props) {
    super(props);
    this.state = {
      columns: props.columns || null,
      row: props.row,
    };
  }

  renderFields() {
    return this.state.columns.map((column, i) => {
      let values = this.state.row.values,
          value  = values && values[column.id] ? values[column.id] : ""; //0
      return (
        <TableCellContainer key={i} value={value} column={column} />
      );
    }, this);
  }

  render() {
    return(
      <tr>
        <td className="row-number">{this.props.num}</td>
        {this.renderFields()}
      </tr>
    )
  }
}
