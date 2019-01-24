import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button } from 'reactstrap'

const TableCellSelect = props => (
  <React.Fragment>
  { props.editable ?
    <form onSubmit={props.handleSubmit}>
      <select name="newValue"
        onChange={props.handleChange}
        value={props.newValue}
        required={props.column.isRequired} >
          <option value=""></option>
          {props.options.map((option, i) => {
            return (
              <option key={i} value={option}>{option}</option>
            );
          }, this)}
      </select>
      <Button color="primary" type="submit" className="touch m-1">Ok</Button>
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
  handleChange: PropTypes.func.isRequired,
  handleClick:  PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps)(TableCellSelect)
