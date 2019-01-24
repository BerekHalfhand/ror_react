import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button, Form, Input, InputGroup, InputGroupAddon } from 'reactstrap'

const Options = props => (
  <React.Fragment>
    <option value=""></option>
    {props.options.map((option, i) => {
      return <option key={i} value={option}>{option}</option>
    }, this)}
  </React.Fragment>
)

const TableCellDefault = props => (
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

TableCellDefault.propTypes = {
  type:           PropTypes.string.isRequired,
  required:       PropTypes.bool.isRequired,
  column:         PropTypes.object.isRequired,
  value:          PropTypes.string,
  editable:       PropTypes.bool,
  options:        PropTypes.array,
  handleChange:   PropTypes.func.isRequired,
  handleClick:    PropTypes.func.isRequired,
  handleSubmit:   PropTypes.func.isRequired,
  handleKeyDown:  PropTypes.func.isRequired,
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps)(TableCellDefault)
