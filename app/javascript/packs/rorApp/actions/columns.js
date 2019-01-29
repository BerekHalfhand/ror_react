import * as C from '../constants'

// Action creators
export const receiveColumns = (response) => ({ type: C.COLUMNS_FETCH, payload: {response} })

export const addColumnsRequest = () => ({ type: C.COLUMNS_ADD_REQUEST, })
export const addColumnsSuccess = (response) => ({ type: C.COLUMNS_ADD_SUCCESS, payload: {response} })
export const addColumnsFailure = (error) => ({ type: C.COLUMNS_ADD_FAILURE, payload: {error} })

export const editColumnsRequest = () => ({ type: C.COLUMNS_EDIT_REQUEST })
export const editColumnsSuccess = (response) => ({ type: C.COLUMNS_EDIT_SUCCESS, payload: {response} })
export const editColumnsFailure = (error) => ({ type: C.COLUMNS_EDIT_FAILURE, payload: {error} })

export const deleteColumnsRequest = () => ({ type: C.COLUMNS_DELETE_REQUEST })
export const deleteColumnsSuccess = (response) => ({ type: C.COLUMNS_DELETE_SUCCESS, payload: {response} })
export const deleteColumnsFailure = (error) => ({ type: C.COLUMNS_DELETE_FAILURE, payload: {error} })

export function fetchColumns() {
  return function(dispatch) {
    return $.ajax({url: "/api/v1/column.json", type: "GET"})
    .then(
      response => dispatch(receiveColumns(response)),
      error => console.error('An error occurred.', error)
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
    let id = column.id()

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

export function deleteColumns(id) {
  return function(dispatch) {
    dispatch(deleteColumnsRequest())

    return $.ajax({
      url: "/api/v1/column/"+id,
      type: "DELETE",
    })
    .then(
      response => dispatch(deleteColumnsSuccess(response)),
      error => dispatch(deleteColumnsFailure(error))
    )
  }
}
