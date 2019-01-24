import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const FilterFormSelect = props => (
  <React.Fragment>
      <label className="d-block">
        {props.column.title+": "}
        <select name="value1" onChange={(e) => props.handleChange(e)}>
            <option value=""></option>
            {props.options.map((option, i) => {
              return (
                <option key={i} value={option}>{option}</option>
              );
            }, this)}
        </select>
      </label>
  </React.Fragment>
)

FilterFormSelect.propTypes = {
  options:      PropTypes.array.isRequired,   //list of options
  column:       PropTypes.object.isRequired,  //just for the title
  handleChange: PropTypes.func.isRequired,    //how to handle changes
}

// const mapStateToProps = state => ({ ...state })
//
// export default connect(mapStateToProps)(FilterForm)
export default FilterFormSelect
