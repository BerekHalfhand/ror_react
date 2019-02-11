import * as C from '../constants'

// Action creators
export const receiveRows = (response) => ({ type: C.ROWS_FETCH, payload: {response} })

export const addRowsRequest = () => ({ type: C.ROWS_ADD_REQUEST })
export const addRowsSuccess = (response) => ({ type: C.ROWS_ADD_SUCCESS, payload: {response} })
export const addRowsFail = (error) => ({ type: C.ROWS_ADD_FAILURE, payload: {error} })

export const editRowsRequest = () => ({ type: C.ROWS_EDIT_REQUEST })
export const editRowsSuccess = (response) => ({ type: C.ROWS_EDIT_SUCCESS, payload: {response} })
export const editRowsFailure = (error) => ({ type: C.ROWS_EDIT_FAILURE, payload: {error} })

export function fetchRows() {
  return function(dispatch) {
    return $.ajax({url: '/api/v1/row.json', type: 'GET'})
    .then(
      response => dispatch(receiveRows(response)),
      error => console.error('An error occurred.', error)
    )
  }
}

export function addRows(quantity) {
  return function(dispatch) {
    dispatch(addRowsRequest())

    return $.ajax({
      url: '/api/v1/row',
      type: 'POST',
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
      url: '/api/v1/row/'+id,
      type: 'PATCH',
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
