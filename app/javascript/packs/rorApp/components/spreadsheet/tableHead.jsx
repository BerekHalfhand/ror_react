import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
// import {Api} from '../middleware/api'

// Components
import TableCell from './tableCell';

export default class TableHead extends React.Component {
  static propTypes = {
    columns: PropTypes.array,           //all the columns in the table
  }

  constructor(props) {
    super(props);
    this.state = {
      columns: props.columns || null,
    };
    this.renderTitles = this.renderTitles.bind(this);
  }

  renderTitles() {
    return this.state.columns.map((column, i) => {
      return (
        <TableCell key={i} value={column.title} column={column} isHead={true} />
      );
    }, this);
  }

  render() {
    return(
      <tr className="font-weight-bold">
        <th>#</th>
        {this.renderTitles()}
      </tr>
    )
  }
}
