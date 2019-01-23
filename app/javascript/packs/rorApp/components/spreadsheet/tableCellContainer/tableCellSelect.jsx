import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const TableCellSelect = props => (
  <React.Fragment>
  { props.editable ?
    <form onSubmit={props.handleSubmit}>
      <select onChange={props.handleSelect}
        value={props.newValue}
        required={props.column.isRequired} >
          <option value=""></option>
          {props.options.map((option, i) => {
            return (
              <option key={i} value={option}>{option}</option>
            );
          }, this)}
      </select>
      <button type="submit" className="btn btn-primary touch m-1">Ok</button>
    </form> :
    props.value }
  </React.Fragment>
)

TableCellSelect.propTypes = {
  options:      PropTypes.array.isRequired,
  required:     PropTypes.bool.isRequired,
  column:       PropTypes.object.isRequired,
  value:        PropTypes.string,
  newValue:     PropTypes.string,
  editable:     PropTypes.bool,
  handleSelect: PropTypes.func.isRequired,
  handleClick:  PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps)(TableCellSelect)
