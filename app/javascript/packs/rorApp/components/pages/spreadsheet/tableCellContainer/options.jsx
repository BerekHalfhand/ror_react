import React from 'react'
import PropTypes from 'prop-types'

const Options = props => (
  <React.Fragment>
    <option value=""></option>
    {props.options.map((option, i) => {
      return <option key={i} value={option}>{option}</option>
    }, this)}
  </React.Fragment>
)

Options.propTypes = {
  options: PropTypes.array,
}

export default Options
