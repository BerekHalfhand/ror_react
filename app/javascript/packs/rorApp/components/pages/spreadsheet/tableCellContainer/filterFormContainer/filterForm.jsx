import React from 'react'
import PropTypes from 'prop-types'
import { Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap'

// Components
import Options from '../options'

const FilterForm = props => (
  <React.Fragment>
    <InputGroup>
      <InputGroupAddon addonType="prepend">
        <InputGroupText className="box mw-250">{['date', 'number'].includes(props.column.type) ? "From" : props.column.title}</InputGroupText>
      </InputGroupAddon>
      <Input type={props.column.type} name="value1" onChange={(e) => props.handleChange(e)}>
        {props.column.type === 'select' ? <Options options={props.options} /> : null }
      </Input>
    </InputGroup>
    {!['text', 'select'].includes(props.column.type) ?
      <React.Fragment>
        <br />
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>To</InputGroupText>
          </InputGroupAddon>
          <Input type={props.column.type} name="value2" onChange={(e) => props.handleChange(e)} />
        </InputGroup>
      </React.Fragment>
      : null }
  </React.Fragment>
)

FilterForm.propTypes = {
  column:       PropTypes.object.isRequired,  //column data
  options:      PropTypes.array,              //list of options
  handleChange: PropTypes.func.isRequired,    //how to handle changes
}

export default FilterForm
