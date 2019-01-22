export const COLUMNS_FETCH  = 'COLUMNS_FETCH'
export const COLUMNS_ADD    = 'COLUMNS_ADD'
export const COLUMNS_EDIT   = 'COLUMNS_EDIT'
export const ROWS_FETCH     = 'ROWS_FETCH'
export const ROWS_ADD       = 'ROWS_ADD'
export const ROWS_EDIT      = 'ROWS_EDIT'

/*
 * action creators
 */

// export function addColumn(column) {
//   console.log('addColumn action -> ', column)
//   return (dispatch) => {
//     dispatch({
//       type: COLUMNS_ADD,
//       column: column,
//     });
//   };
// }

export const addColumn = column => ({
  type: COLUMNS_ADD,
  payload: {
    column
  }
})

export const addRows = quantity => ({
  type: ROWS_ADD,
  payload: {
    quantity
  }
})

export const editRow = (row, column, value) => ({
  type: ROWS_EDIT,
  payload: {
    row,
    column,
    value
  }
})
