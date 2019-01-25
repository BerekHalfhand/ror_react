import React from 'react'
import { connect } from 'react-redux'
import autoBind from 'react-autobind'
import {isItemPresent} from 'packs/rorApp/constants'

// Components
import Spreadsheet from './spreadsheet'

class SpreadsheetContainer extends React.Component {
  constructor(props) {
    super(props)
    autoBind(this)
  }

  //filter function, returns false if the row doesn't pass the checks, true otherwise
  runFilters (row) {
    let match = true
    this.props.filters.items.map((filter, i) => {

      //sanity check against old filters
      if (isItemPresent(this.props.columns.items, filter.column)) {
        //if the item doesn't have this field filled
        if (!row.values || $.isEmptyObject(row.values) || !row.values[filter.column])
          match = false
        //if it does
        else {
          let value = row.values[filter.column]

          switch (filter.type) {
            case 'text':
            //does this value contain query text
              if (value.toLowerCase().indexOf(filter.values[0].toLowerCase()) < 0)
                match = false

              break;

            case 'number':
            //is it between given numbers
              if (filter.values[0] && value < filter.values[0] ||
                  filter.values[1] && value > filter.values[1])
                match = false

              break;

            case 'date':
            //is it between given dates
              value = new Date(value)

              if (filter.values[0] && value < new Date(filter.values[0]) ||
                  filter.values[1] && value > new Date(filter.values[1]))
                match = false

              break;

            default:
            //this must be a select, straight matching
              if (value != filter.values[0])
                match = false
          }
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
      //filters are active and present
      filteredItems = rows.items.filter(this.runFilters)

      filteredItems.map((item, i) => {
        res.push(item.id())
      })

    } else {
      //or not, returning an array with all the IDs
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
