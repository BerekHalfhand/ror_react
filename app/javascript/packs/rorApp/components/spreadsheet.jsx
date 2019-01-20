import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
// import {Api} from '../middleware/api'

// Components
import TableHead from './spreadsheet/tableHead';
import TableRow from './spreadsheet/tableRow';

export default class Spreadsheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [
        {id: 'r1', values: {
          'c1': 'str1',
          'c2': 123,
        }},
        {id: 'r2', values: {
          'c1': 'str2',
          'c2': 666,
          'c3': '2019-01-09',
          'c4': 'opt2',
        }},
        {id: 'r3', values: {
          'c1': 'str3',
          'c2': 0,
        }},
      ],
      columns: [
        {id: 'c1', title: 'String', type: 'text',   isRequired: true},
        {id: 'c2', title: 'Number', type: 'number', isRequired: true},
        {id: 'c3', title: 'Date',   type: 'date',   isRequired: true},
        {id: 'c4', title: 'Select', type: 'select', isRequired: true, options: ['opt1', 'opt2', 'opt3']},
      ],
    };
  }

  componentDidMount() {

  }

  checkState() {
    console.dir(this.state);
  }

  //add a new column
  addColumn() {
    let columns = this.state.columns, i = this.state.columns.length+1;
    let newColumn = {id: `c${i}`, title: `Title ${i}`, type: 'string'};
    columns.push(newColumn);

    this.setState({
      columns: columns,
    });
  }

  //add some empty rows
  addRows(quantity) {
    console.log(quantity);
    let rows = this.state.rows,
        l = this.state.rows.length+1,
        newRow;

    for(let i = l; i < l + quantity; i++) {
      newRow = {id: `r${i}`, values: {}};
      rows.push(newRow);
    }

    this.setState({
      rows: rows,
    });
  }

  renderRows() {
    return this.state.rows.map((row, i) => {
      return (<TableRow key={row.id} num={++i} row={row} columns={this.state.columns}/>);
    }, this);
  }

  render() {
    return(
      <React.Fragment>
        <h1>Spreadsheet</h1>
        <button type="button" className="btn btn-primary m-2" onClick={() => this.addRows(10)}>Add 10 rows</button>
        <button type="button" className="btn btn-secondary m-2" onClick={() => this.addColumn()}>Add column</button>
        <button type="button" className="btn btn-light m-2" onClick={() => this.checkState()}>Check State</button>

        <table id="spreadsheet-table" className="table table-bordered table-striped">
          <thead>
            <TableHead columns={this.state.columns} />
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
        <Link to="/">Home</Link>
      </React.Fragment>
    )
  }
}
