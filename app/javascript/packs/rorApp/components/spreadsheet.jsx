import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
// import {Api} from '../middleware/api'

// Components
import TableHead from './spreadsheet/tableHead';
import TableRow from './spreadsheet/tableRow';

const Spreadsheet = props => (
      <React.Fragment>
        <h1>Spreadsheet</h1>
        <button type="button" className="btn btn-primary m-2" onClick={() => props.handleAddRows(10)}>Add 10 rows</button>
        <button type="button" className="btn btn-secondary m-2" onClick={() => props.handleAddColumn()}>Add column</button>

        <table id="spreadsheet-table" className="table table-bordered table-striped">
          <thead>
            <TableHead columns={props.columns} />
          </thead>
          <tbody>
            {props.rows.map((row, i) => {
              return (<TableRow key={row.id} num={++i} row={row} columns={props.columns}/>);
            }, this)}
          </tbody>
        </table>
        <Link to="/">Home</Link>
      </React.Fragment>
)

export default Spreadsheet
