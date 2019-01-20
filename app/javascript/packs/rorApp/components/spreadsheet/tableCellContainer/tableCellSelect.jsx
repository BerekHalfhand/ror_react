import React from 'react';
import PropTypes from 'prop-types';

const TableCellSelect = props => (
  <React.Fragment>
  { props.editable ?
    <form onSubmit={props.handleSubmit}>
      <select onChange={props.handleSelect}
        value={props.newValue}
        required={props.column.isRequired} >
          {props.options.map((option, i) => {
            return (
              <option key={i} value={option}>{option}</option>
            );
          }, this)}
      </select>
      <button type="submit" className="btn btn-primary m-1">Ok</button>
    </form> :
    props.value }
  </React.Fragment>
)

TableCellSelect.propTypes = {
  options: PropTypes.array.isRequired,
  required: PropTypes.bool.isRequired,
  //...
}

export default TableCellSelect
