import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import autoBind from 'react-autobind'
import { addColumns } from '../../actions'

// Components
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
    autoBind(this)
  }

  handleSubmit (event) {
      event.preventDefault()

      let options = []
      if (this.state.options) options = this.state.options.split(',')

      options = options.map(function(item) {
        return item.trim();
      });

      let column = {
        title: this.state.title,
        isRequired: this.state.isRequired,
        type: this.state.type,
        options: options,
      }

      this.props.addColumns(column)
      this.props.hideForm()
    }

    handleChange (event) {
      let key = event.target.name,
          value = event.target.type === 'checkbox' ? event.target.checked : event.target.value

      this.setState({ [key]: value })
      if (key == 'type') this.setState({showOptions: value == 'select'})
    }

  render() {
    return <NewColumn handleSubmit={this.handleSubmit} handleChange={this.handleChange} showOptions={this.state.showOptions}/>
  }
}

NewColumnContainer.propTypes = {
  hideForm: PropTypes.func,
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps, { addColumns })(NewColumnContainer)
