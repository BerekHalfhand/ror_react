import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import autoBind from 'react-autobind'
import { addColumn, addRows } from '../actions/index'

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
    let rows = this.props.rows || null,
        columns = this.props.columns || null

    return (
      <article>
        <h1>Spreadsheet</h1>
        <button type="button" className="btn btn-primary touch m-2"
            onClick={() => this.toggleShowForm()}
            disabled={columns.isFetching}>Add column</button>
        {this.state.showForm ?
          <NewColumnContainer hideForm={this.toggleShowForm}/>
        : null}
        { columns.items.length ?
          <React.Fragment>
            <hr />
            <table id="spreadsheet-table" className="table table-bordered table-striped">
              <thead>
                <TableHead columns={columns.items} />
              </thead>
              <tbody>
                {rows && rows.items.map((row, i) => {
                  return row._id ? (<TableRow key={row._id.$oid} num={++i} row={row} columns={this.props.columns}/>) : null
                }, this)}
              </tbody>
            </table>
            <button type="button" className="btn btn-info touch m-2"
                onClick={() => this.props.addRows(10)}
                disabled={rows.isFetching}>Add 10 rows</button>
          </React.Fragment>
        : null }
        <hr />
        <Link to="/">Home</Link>
      </article>
    )
  }
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps, {addColumn, addRows})(Spreadsheet)
