import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import autoBind from 'react-autobind'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

class ModalForm extends React.Component {
  static propTypes = {
    body:         PropTypes.element.isRequired,   //what to render in the form
    buttonLabel:  PropTypes.string,               //what to write on the toggling button
    title:        PropTypes.string,               //what to write on top of it all
    handleSubmit: PropTypes.func.isRequired,      //what to do on submit
  }

  constructor(props) {
    super(props)
    this.state = {
      modal: false
    }

    autoBind(this)
  }

  toggle() {
    console.log('toggle')
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <React.Fragment>
      <Button outline color="secondary" className="m-1 touch"
              onClick={(e) => {e.stopPropagation (); this.toggle()}}>{this.props.buttonLabel}</Button>
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <form onSubmit={(e) => this.props.handleSubmit(e)}>
          <ModalHeader toggle={this.toggle}>{this.props.title}</ModalHeader>
          <ModalBody className="text-center">
            {this.props.body ? this.props.body : null}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit" onClick={this.toggle}>Save</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </form>
      </Modal>
    </React.Fragment>
    )
  }
}

export default ModalForm
