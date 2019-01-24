import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import autoBind from 'react-autobind'
import { Button, Input } from 'reactstrap'
import { addColumn, addRows, addFilter, removeFilter, toggleFilters } from '../actions'

// Components
import TableHead from './spreadsheet/tableHead'
import TableRow from './spreadsheet/tableRow'
import NewColumnContainer from './spreadsheet/newColumnContainer'

const Spreadsheet = (props) => (
  <article>
    <h1>Spreadsheet</h1>
    <Button color="primary" className="touch m-2"
            onClick={() => props.handleToggle()}
            disabled={props.columns.isFetching}>Add column</Button>
    <label className="touch">Filter
      <Input  type="checkbox" className="m-1"
              checked={props.filters.isActive}
              onChange={() => props.toggleFilters()}/>
    </label>
    <Button color="secondary" className="touch m-2"
            onClick={() => props.removeFilter(null)}>Reset filters</Button>
    {props.showForm ?
      <NewColumnContainer hideForm={props.handleToggle}/>
    : null}
    { props.columns.items.length ?
      <React.Fragment>
        <hr />
        <table id="spreadsheet-table" className="table table-bordered table-striped">
          <thead>
            <TableHead />
          </thead>
          <tbody>
            {props.rows && props.rows.items.map((row, i) => {
              return row._id ? (<TableRow key={row._id.$oid}
                                          num={++i}
                                          row={row}
                                          className={props.filteredRows.length &&
                                                    !props.filteredRows.includes(row._id.$oid) ?
                                                      "d-none" : ""                                                      }
                                />)
                              : null
            }, this)}
          </tbody>
        </table>
        <Button color="info" className="touch m-2"
                onClick={() => props.addRows(10)}
                disabled={props.rows.isFetching}>Add 10 rows</Button>
      </React.Fragment>
    : null }
    <hr />
    <Link to="/">Home</Link>
  </article>
)

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps, {addColumn, addRows, addFilter, removeFilter, toggleFilters})(Spreadsheet)
