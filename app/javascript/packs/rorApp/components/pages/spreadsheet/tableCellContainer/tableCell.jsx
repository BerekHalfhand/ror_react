import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button, Form, Input, InputGroup, InputGroupAddon } from 'reactstrap'

// Components
import Options from './options'

const TableCell = props => (
  <React.Fragment>
    { props.editable ?
      <Form onSubmit={props.handleSubmit}>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <Button color="secondary" type="submit" className="touch">Ok</Button>
          </InputGroupAddon>
          <Input name="newValue"
                type={props.type}
                onChange={props.handleChange}
                onKeyDown={props.handleKeyDown}
                placeholder={props.column.title}
                required={props.column.isRequired}
                defaultValue={props.value} >
              {props.type === 'select' ? <Options options={props.options} /> : null }
          </Input>

        </InputGroup>
      </Form> :
      props.value }
  </React.Fragment>
)

TableCell.propTypes = {
  type:           PropTypes.string.isRequired,  //the input's type
  column:         PropTypes.object.isRequired,  //column date
  value:          PropTypes.string,             //initial value
  editable:       PropTypes.bool,               //are we showing a form or a value
  options:        PropTypes.array,              //for selects only, [] for the rest
  handleChange:   PropTypes.func.isRequired,
  handleClick:    PropTypes.func.isRequired,
  handleSubmit:   PropTypes.func.isRequired,
  handleKeyDown:  PropTypes.func.isRequired,
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps)(TableCell)
