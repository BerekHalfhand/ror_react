import React from 'react';

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
        <button type="submit" className="btn btn-primary m-1">Ok</button>
      </form> :
      props.value }
  </React.Fragment>
)

export default TableCellDefault
