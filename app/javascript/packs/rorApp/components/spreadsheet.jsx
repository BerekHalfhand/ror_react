import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import autoBind from 'react-autobind'
import { addColumn, addRows, addFilter, removeFilter, toggleFilters } from '../actions/index'

// Components
import TableHead from './spreadsheet/tableHead'
import TableRow from './spreadsheet/tableRow'
import NewColumnContainer from './spreadsheet/newColumnContainer'

class Spreadsheet extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showForm: false,
      applyFilters: true,
    }
    autoBind(this)
  }

  //v = optional explicit value
  toggleShowForm (v) {
    this.setState({showForm: v || !this.state.showForm})
  }

  runFilters (row) {
        // console.log('runFilters')
    let match = true

    this.props.filters.items.map((filter, i) => {
      // console.log('row', row)
      // console.log('filter', filter)
      if (!row.values || $.isEmptyObject(row.values) || !row.values[filter.column])
        match = false

      let value = row.values[filter.column]

      switch (filter.type) {

        case 'number':
          if (filter.values[0] && value < filter.values[0] ||
              filter.values[1] && value > filter.values[1])
            match = false

          break;

        case 'date':
          value = new Date(value)
          if (filter.values[0] && value < new Date(filter.values[0]) ||
              filter.values[1] && value > new Date(filter.values[1]))
            match = false

          break;

        default:
        if (value != filter.values[0])
          match = false
      }

    })
    // console.log('match', match)
    return match
  }

  render() {
    let rows = $.extend({}, this.props.rows),
        columns = $.extend({}, this.props.columns)

    if (this.props.filters.items && this.props.filters.items.length && this.props.filters.isActive)
      rows.items = rows.items.filter(this.runFilters)

    return (
      <article>
        <h1>Spreadsheet</h1>
        <button type="button" className="btn btn-primary touch m-2"
            onClick={() => this.toggleShowForm()}
            disabled={columns.isFetching}>Add column</button>
        <label className="touch">Filter
          <input type="checkbox" checked={this.props.filters.isActive} onChange={() => this.props.toggleFilters()} className="m-1"/>
        </label>
        <button type="button" className="btn btn-secondary touch m-2"
            onClick={() => this.props.addFilter({id: '2', column: '5c47dfb79375b058bf09214f', type: 'select', values: ['Male']})}>Add filter</button>

        <button type="button" className="btn btn-secondary touch m-2"
            onClick={() => this.props.removeFilter('5c47dfb79375b058bf09214f')}>Remove filter</button>
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

export default connect(mapStateToProps, {addColumn, addRows, addFilter, removeFilter, toggleFilters})(Spreadsheet)
