import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const FilterFormDefault = props => (
  <React.Fragment>
      <label className="d-block">
        {(props.column.type != 'text' ? "From" : props.column.title)+": "}
        <input type={props.column.type} name="value1" onChange={(e) => props.handleChange(e)}/>
      </label>
      { props.column.type != 'text' ?
        <label className="d-block">
        {"To: "}
          <input type={props.column.type} name="value2" onChange={(e) => props.handleChange(e)}/>
        </label>
      : null }
  </React.Fragment>
)

FilterFormDefault.propTypes = {
  column:       PropTypes.object.isRequired,  //column data
  handleChange: PropTypes.func.isRequired,    //how to handle changes
}

// const mapStateToProps = state => ({ ...state })
//
// export default connect(mapStateToProps)(FilterForm)
export default FilterFormDefault
