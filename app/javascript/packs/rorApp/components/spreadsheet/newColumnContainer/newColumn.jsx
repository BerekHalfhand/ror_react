import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const NewColumn = props => (
  <React.Fragment>
    <hr />
    <form onSubmit={props.handleSubmit}>
      <label className="mr-1">
        Title:
        <input type="text"
              name="title"
              className="m-1"
              placeholder="New Column"
              onChange={props.handleChange}
              required />
      </label>
      <label className="mr-1">
        Required:
        <input
          name="isRequired"
          className="m-1"
          type="checkbox"
          onChange={props.handleChange} />
      </label>
      <label className="mr-1">
        Type:
        <select onChange={props.handleChange}
          defaultValue="text"
          name="type"
          className="m-1"
          required >
            {['text', 'number', 'date', 'select'].map((option, i) => {
              return (
                <option key={i} value={option}>{option}</option>
              );
            }, this)}
        </select>
      </label>
      {props.showOptions ? <label className="mr-1">
        Options:
        <input type="text"
              name="options"
              className="m-1"
              placeholder="List options using commas"
              onChange={props.handleChange}
              required />
      </label> : null }
      <button type="submit" className="btn btn-primary m-1">Ok</button>
    </form>
  </React.Fragment>
)

NewColumn.propTypes = {
  showOptions:  PropTypes.bool,              //for 'select' types
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default NewColumn
