import React from 'react'
import PropTypes from 'prop-types'
import autoBind from 'react-autobind'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form } from 'reactstrap'

class ModalForm extends React.Component {
  static propTypes = {
    body:         PropTypes.element.isRequired,   //what to render in the form
    buttonLabel:  PropTypes.string,               //what to write on the toggling button
    buttonColor:  PropTypes.string,               //must be one of Bootstrap 4 button colors
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
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <React.Fragment>
        <Button outline color={this.props.buttonColor} className="m-1 touch"
                onClick={(e) => {e.stopPropagation (); this.toggle()}}>
                  {this.props.buttonLabel}
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <Form onSubmit={(e) => this.props.handleSubmit(e)}>
            <ModalHeader toggle={this.toggle}>
              <span className="box mw-400">{this.props.title}</span>
            </ModalHeader>
            <ModalBody>
              {this.props.body ? this.props.body : null}
            </ModalBody>
            <ModalFooter>
              <Button color="primary" type="submit" onClick={this.toggle}>Save</Button>{' '}
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </Form>
        </Modal>
      </React.Fragment>
    )
  }
}

export default ModalForm
