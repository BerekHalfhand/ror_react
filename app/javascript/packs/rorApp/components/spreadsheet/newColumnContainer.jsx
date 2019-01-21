import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import autoBind from 'react-autobind'
import { addColumn } from '../../actions'

// import {Api} from '../middleware/api'

// Components
import NewColumn from './newColumnContainer/newColumn'

class NewColumnContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      type: "",
      options: "",
      isRequired: false,
    }
    autoBind(this)
  }

  handleSubmit (event) {
      event.preventDefault();

      let column = {
        title: this.state.title,
        isRequired: this.state.isRequired,
        type: this.state.type,
        options: this.state.options,
      }

      this.props.addColumn(column)
      this.props.hideForm()
    }

    handleChange (event) {
      let key = event.target.name,
          value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

      this.setState({ [key]: value })
      if (key == 'type') this.setState({showOptions: value == 'select'})
      // console.log(key, value)
    }

  render() {
    return <NewColumn handleSubmit={this.handleSubmit} handleChange={this.handleChange} showOptions={this.state.showOptions}/>
  }
}

NewColumnContainer.propTypes = {
  hideForm: PropTypes.func,
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps, { addColumn })(NewColumnContainer)
