import React from 'react'
import { connect } from 'react-redux'
import autoBind from 'react-autobind'

// Components
import Spreadsheet from './spreadsheet'

class SpreadsheetContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showForm: false,
    }
    autoBind(this)
  }

  //filter function, returns false if the row doesn't pass the checks, true otherwise
  runFilters (row) {
    let match = true

    this.props.filters.items.map((filter, i) => {
      if (!row.values || $.isEmptyObject(row.values) || !row.values[filter.column])
        match = false
      else {
        let value = row.values[filter.column]

        switch (filter.type) {
          case 'text':
            if (value.toLowerCase() != filter.values[0].toLowerCase())
              match = false

            break;

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
      }

    })

    return match
  }

  //returns an array with the rows that passed all checks.
  //if [], none will appear
  getFilteredIds () {
    let res = [], rows = {}, filteredItems = []

    rows = $.extend(true, rows, this.props.rows)

    if (this.props.filters.items &&
        this.props.filters.items.length &&
        this.props.filters.isActive) {

      filteredItems = rows.items.filter(this.runFilters)

      filteredItems.map((item, i) => {
        res.push(item.id())
      })

    } else {
      rows.items.map((item, i) => {
        res.push(item.id())
      })
    }

    return res
  }

  render() {
    let filteredRows = this.getFilteredIds()

    return (<Spreadsheet filteredRows={filteredRows} />)
  }
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps)(SpreadsheetContainer)
