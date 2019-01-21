export const ADD_COLUMN = 'ADD_COLUMN'
export const ADD_ROW = 'ADD_ROW'
export const EDIT_FIELD = 'EDIT_FIELD'

/*
 * action creators
 */

// export function addColumn(column) {
//   console.log('addColumn action -> ', column)
//   return (dispatch) => {
//     dispatch({
//       type: ADD_COLUMN,
//       column: column,
//     });
//   };
// }

export const addColumn = column => ({
  type: ADD_COLUMN,
  payload: {
    column
  }
})

export const addRows = quantity => ({
  type: ADD_ROW,
  payload: {
    quantity
  }
})

export const editField = (row, column, value) => ({
  type: EDIT_FIELD,
  payload: {
    row,
    column,
    value
  }
})
