import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const TableCellDefault = props => (
  <React.Fragment>
    { props.editable ?
      <form onSubmit={props.handleSubmit}>
        <input type={props.type}
              onChange={props.handleChange}
              onKeyDown={props.handleKeyDown}
              placeholder={props.column.title}
              required={props.column.isRequired}
              defaultValue={props.value} />
        <button type="submit" className="btn btn-primary touch m-1">Ok</button>
      </form> :
      props.value }
  </React.Fragment>
)

TableCellDefault.propTypes = {
  type:           PropTypes.string.isRequired,
  required:       PropTypes.bool.isRequired,
  column:         PropTypes.object.isRequired,
  value:          PropTypes.string,
  editable:       PropTypes.bool,
  handleChange:   PropTypes.func.isRequired,
  handleClick:    PropTypes.func.isRequired,
  handleSubmit:   PropTypes.func.isRequired,
  handleKeyDown:  PropTypes.func.isRequired,
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps)(TableCellDefault)
