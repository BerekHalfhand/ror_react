import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button } from 'reactstrap'
import { addColumn, addRows, addFilter, removeFilter, toggleFilters } from 'packs/rorApp/actions'

// Components
import TableHead from './spreadsheet/tableHead'
import TableRow from './spreadsheet/tableRow'
import NewColumnContainer from './spreadsheet/newColumnContainer'

const Spreadsheet = (props) => (
  <article>
    <h1>Spreadsheet</h1>

    <span className={props.rows.items && props.rows.items.length ? "float-right" : "d-none"}>
      <label className="touch">
        <input  type="checkbox" className="m-1 align-bottom"
                checked={props.filters.isActive}
                onChange={() => props.toggleFilters()}/>
                Filter rows
      </label>
      <Button outline color="secondary" className="touch m-2"
              onClick={() => props.removeFilter(null)}>Reset filters</Button>
    </span>

    <NewColumnContainer />

    { props.columns.items.length ?
      <React.Fragment>
        <hr />
        <table id="spreadsheet-table" className="table table-bordered table-striped">
          <thead>
            <TableHead />
          </thead>
          <tbody>
            {props.rows && props.rows.items.map((row, i) => {
              return row._id ? (<TableRow key={row.id()}
                                          num={++i}
                                          row={row}
                                          className={!props.filteredRows.includes(row.id()) ? "d-none" : "" }
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

Spreadsheet.propTypes = {
  filteredRows: PropTypes.array.isRequired,   //which rows to show, what's not included will be hidden
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps, {addColumn, addRows, addFilter, removeFilter, toggleFilters})(Spreadsheet)
