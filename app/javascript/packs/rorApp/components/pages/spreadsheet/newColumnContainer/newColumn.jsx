import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, Label, Input } from 'reactstrap'

const NewColumn = props => (
  <React.Fragment>
    <FormGroup>
      <Label forhtml="title-input">Title</Label>
      <Input type="text"
              name="title"
              id="title-input"
              placeholder="New Column"
              onChange={props.handleChange}
              required />
    </FormGroup>
    <FormGroup check className="mb-1">
      <Label check forhtml="is-required-checkbox">
        <Input type="checkbox"
                name="isRequired"
                id="is-required-checkbox"
                onChange={props.handleChange} />{' '}
        Required
      </Label>
    </FormGroup>
    <FormGroup>
      <Label forhtml="type-select">Type</Label>
      <Input type="select"
              onChange={props.handleChange}
              defaultValue="text"
              name="type"
              id="type-select"
              className="m-1"
              required >
                {['text', 'number', 'date', 'select'].map((option, i) => {
                  return (
                    <option key={i} value={option}>{option}</option>
                  )
                }, this)}
      </Input>
    </FormGroup>
    {props.showOptions ? (
      <FormGroup>
        <Label forhtml="options-input">Options</Label>
        <Input type="text"
              name="options"
              id="options-input"
              placeholder="List options using commas"
              onChange={props.handleChange}
              required />

      </FormGroup>
    ) : null }
  </React.Fragment>
)

NewColumn.propTypes = {
  showOptions:  PropTypes.bool,              //for 'select' types
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default NewColumn
