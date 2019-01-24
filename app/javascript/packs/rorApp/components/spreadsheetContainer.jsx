import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import autoBind from 'react-autobind'

// Components
import Spreadsheet from './spreadsheet'

class SpreadsheetContainer extends React.Component {
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
    let match = true

    this.props.filters.items.map((filter, i) => {
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
    return match
  }

  getFilteredIds () {
    let res = [], rows = $.extend({}, this.props.rows)

    if (this.props.filters.items &&
        this.props.filters.items.length &&
        this.props.filters.isActive) {
      rows.items = rows.items.filter(this.runFilters)
      rows.items.map((item, i) => {
        res.push(item._id.$oid)
      })
    }
    return res
  }

  render() {
    let filteredRows = this.getFilteredIds()

    return (<Spreadsheet  filteredRows={filteredRows}
                          handleToggle={this.toggleShowForm}
                          showForm={this.state.showForm} />)
  }
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps)(SpreadsheetContainer)
