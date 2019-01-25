import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import autoBind from 'react-autobind'
import { Button } from 'reactstrap'
import { addFilter, removeFilter, toggleFilters } from 'packs/rorApp/actions'

// Components
import ModalForm from 'packs/rorApp/components/modalForm'
import FilterForm from './filterFormContainer/filterForm'

class FilterFormContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value1: null,
      value2: null,
    }
    this.baseState = this.state

    autoBind(this)
  }

  resetForm() {
    this.setState(this.baseState)
  }

  handleChange(event) {
    let field = {[event.target.name]: event.target.value}
    this.setState({ ...field })
  }

  handleSubmit(event) {
    event.preventDefault()
    if (!this.state.value1 && !this.state.value2) return false

    let filter = {
      type: this.props.column.type,
      column: this.props.column.id(),
      values: [this.state.value1, this.state.value2]
    }

    //make sure numbers are stored as such
    if (filter.type == 'number') filter.values = [parseInt(filter.values[0]), parseInt(filter.values[1])]

    this.props.addFilter(filter)
    this.resetForm()
  }

  clearFilter(event) {
    event.stopPropagation()   //avoiding the parent's event handlers
    this.props.removeFilter(this.props.activeFilter.column)
    this.resetForm()
  }

  render() {
    let form = (<FilterForm handleChange={this.handleChange} options={this.props.column.options} {...this.props} />)

    return (
      <React.Fragment>
        {this.props.activeFilter ?
          <Button color="danger" className="m-1 touch" onClick={(e) => {this.clearFilter(e)}}>X</Button>
        :
          <ModalForm handleSubmit={this.handleSubmit}
                   body={form}
                   buttonLabel="?"
                   buttonColor="secondary"
                   title={"Filter for '"+this.props.column.title+"'"} />
        }

      </React.Fragment>
    )
  }
}

FilterFormContainer.propTypes = {
  column:   PropTypes.object.isRequired,   //column data
}

// activeFilter defines if there is a filter applied and how to present it
const mapStateToProps = (state, ownProps) => {
  let activeFilter = null
  state.filters.items.map((item, i) => {
    if (item.column == ownProps.column.id())
      activeFilter = item
  })

  return {activeFilter, ...state}
}

export default connect(mapStateToProps, { addFilter, removeFilter })(FilterFormContainer)
