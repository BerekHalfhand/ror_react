export const ROWS_FETCH         = 'ROWS_FETCH'
export const ROWS_ADD_REQUEST   = 'ROWS_ADD_REQUEST'
export const ROWS_ADD_SUCCESS   = 'ROWS_ADD_SUCCESS'
export const ROWS_ADD_FAILURE   = 'ROWS_ADD_FAILURE'
export const ROWS_EDIT_REQUEST  = 'ROWS_EDIT_REQUEST'
export const ROWS_EDIT_SUCCESS  = 'ROWS_EDIT_SUCCESS'
export const ROWS_EDIT_FAILURE  = 'ROWS_EDIT_FAILURE'

export const receiveRows = data => ({
  type: ROWS_FETCH,
  payload: {
    data
  }
})

export const addRowsRequest = () => ({
  type: ROWS_ADD_REQUEST,
})
export const addRowsSuccess = (response) => ({
  type: ROWS_ADD_SUCCESS,
  payload: {
    response
  }
})
export const addRowsFail = (error) => ({
  type: ROWS_ADD_FAILURE,
  payload: {
    error
  }
})
export const editRowsRequest = () => ({
  type: ROWS_EDIT_REQUEST,
})
export const editRowsSuccess = (response) => ({
  type: ROWS_EDIT_SUCCESS,
  payload: {
    response
  }
})
export const editRowsFailure = (error) => ({
  type: ROWS_EDIT_FAILURE,
  payload: {
    error
  }
})

export function fetchRows() {
  return function(dispatch) {
    return $.ajax({url: "/api/v1/row.json", type: "GET"})
    .then(
      response => dispatch(receiveRows(response)),
      error => console.log('An error occurred.', error)
    )
  }
}

export function addRows(quantity) {
  return function(dispatch) {
    dispatch(addRowsRequest())

    return $.ajax({
      url: "/api/v1/row",
      type: "POST",
      data: { quantity: quantity },
    })
    .then(
      response => dispatch(addRowsSuccess(response)),
      error => dispatch(addRowsFail(error))
    )
  }
}

export function editRows(id, column, value) {
  return function(dispatch) {
    dispatch(editRowsRequest())
    // let id = row._id.$oid

    return $.ajax({
      url: "/api/v1/row/"+id,
      type: "PATCH",
      data: {
        column: column,
        value: value,
      },
    })
    .then(
      response => dispatch(editRowsSuccess(response)),
      error => dispatch(editRowsFailure(error))
    )
  }
}

// export function fetchRows() {
//   return function(dispatch) {
//     return fetch(`/api/v1/row.json`)
//       .then(
//         response => response.json(),
//
//         error => console.log('An error occurred.', error)
//       )
//       .then(json => {
//         dispatch(receiveRows(json))
//       }
//     )
//   }
// }

export const COLUMNS_FETCH         = 'COLUMNS_FETCH'
export const COLUMNS_ADD_REQUEST   = 'COLUMNS_ADD_REQUEST'
export const COLUMNS_ADD_SUCCESS   = 'COLUMNS_ADD_SUCCESS'
export const COLUMNS_ADD_FAILURE   = 'COLUMNS_ADD_FAILURE'
export const COLUMNS_EDIT_REQUEST  = 'COLUMNS_EDIT_REQUEST'
export const COLUMNS_EDIT_SUCCESS  = 'COLUMNS_EDIT_SUCCESS'
export const COLUMNS_EDIT_FAILURE  = 'COLUMNS_EDIT_FAILURE'


export const receiveColumns = data => ({
  type: COLUMNS_FETCH,
  payload: {
    data
  }
})

export const addColumnsRequest = () => ({
  type: COLUMNS_ADD_REQUEST,
})
export const addColumnsSuccess = (response) => ({
  type: COLUMNS_ADD_SUCCESS,
  payload: {
    response
  }
})
export const addColumnsFailure = (error) => ({
  type: COLUMNS_ADD_FAILURE,
  payload: {
    error
  }
})

export const editColumnsRequest = () => ({
  type: COLUMNS_EDIT_REQUEST,
})
export const editColumnsSuccess = (response) => ({
  type: COLUMNS_EDIT_SUCCESS,
  payload: {
    response
  }
})
export const editColumnsFailure = (error) => ({
  type: COLUMNS_EDIT_FAILURE,
  payload: {
    error
  }
})

export function fetchColumns() {
  return function(dispatch) {
    return $.ajax({url: "/api/v1/column.json", type: "GET"})
    .then(
      response => dispatch(receiveColumns(response)),
      error => console.log('An error occurred.', error)
    )
  }
}

export function addColumns(column) {
  return function(dispatch) {
    dispatch(addColumnsRequest())

    return $.ajax({
      url: "/api/v1/column",
      type: "POST",
      data: { column },
    })
    .then(
      response => dispatch(addColumnsSuccess(response)),
      error => dispatch(addColumnsFailure(error))
    )
  }
}

export function editColumns(column) {
  return function(dispatch) {
    dispatch(editColumnsRequest())
    let id = column._id.$oid

    return $.ajax({
      url: "/api/v1/column/"+id,
      type: "PATCH",
      data: {column},
    })
    .then(
      response => dispatch(editColumnsSuccess(response)),
      error => dispatch(editColumnsFailure(error))
    )
  }
}

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
