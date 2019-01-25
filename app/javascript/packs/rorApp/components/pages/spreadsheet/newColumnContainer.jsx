import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import autoBind from 'react-autobind'
import { addColumns } from 'packs/rorApp/actions'

// Components
import ModalForm from 'packs/rorApp/components/modalForm'
import NewColumn from './newColumnContainer/newColumn'

class NewColumnContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      type: "text",
      options: "",
      isRequired: false,
    }
    this.baseState = this.state

    autoBind(this)
  }

  resetForm() {
    this.setState(this.baseState)
  }

  handleSubmit (event) {
      event.preventDefault()

      let options = []
      //options are only there for 'select' types
      if (this.state.options) {
        options = this.state.options.split(',')
        options = options.map(function(item) {
          return item.trim();
        })
      }

      let column = {
        title: this.state.title,
        isRequired: this.state.isRequired,
        type: this.state.type,
        options: options,
      }

      this.resetForm()
      this.props.addColumns(column)
    }

    handleChange (event) {
      let key = event.target.name,
          value = event.target.type === 'checkbox' ? event.target.checked : event.target.value

      this.setState({ [key]: value })

      //if the type chosen is 'select', show the input for its future options
      if (key == 'type') this.setState({showOptions: value == 'select'})
    }

  render() {
    let modalBody = (<NewColumn showOptions={this.state.showOptions}
                                handleSubmit={this.handleSubmit}
                                handleChange={this.handleChange} />)

    return (<ModalForm handleSubmit={this.handleSubmit}
                       body={modalBody}
                       buttonLabel="Add column"
                       buttonColor="primary"
                       title="Add new column" />)
  }
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps, { addColumns })(NewColumnContainer)
