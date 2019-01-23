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
