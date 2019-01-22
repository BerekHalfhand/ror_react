import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import autoBind from 'react-autobind'
import { addColumn, addRows } from '../actions/index'
// import {Api} from '../middleware/api'

// Components
import TableHead from './spreadsheet/tableHead'
import TableRow from './spreadsheet/tableRow'
import NewColumnContainer from './spreadsheet/newColumnContainer'

class Spreadsheet extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showForm: false,
    }
    autoBind(this)
  }

  //v = optional explicit value
  toggleShowForm (v) {
    this.setState({showForm: v || !this.state.showForm})
  }

  render() {
    let rows = this.props.rows || null
    return (
      <React.Fragment>
        <h1>Spreadsheet</h1>
        <button type="button" className="btn btn-primary m-2" onClick={() => this.props.addRows(10)}>Add 10 rows</button>
        <button type="button" className="btn btn-secondary m-2" onClick={() => this.toggleShowForm()}>Add column</button>
        {this.state.showForm ?
          <NewColumnContainer hideForm={this.toggleShowForm}/>
        : null}
        <hr />
        <table id="spreadsheet-table" className="table table-bordered table-striped">
          <thead>
            <TableHead columns={this.props.columns} />
          </thead>
          <tbody>
            {rows && rows.items.map((row, i) => { // !rows.isFetching &&
              return row._id ? (<TableRow key={row._id.$oid} num={++i} row={row} columns={this.props.columns}/>) : null;
            }, this)}
          </tbody>
        </table>
        <Link to="/">Home</Link>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps, {addColumn, addRows})(Spreadsheet)
