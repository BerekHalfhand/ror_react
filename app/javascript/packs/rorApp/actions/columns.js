export const COLUMNS_FETCH         = 'COLUMNS_FETCH'
export const COLUMNS_ADD_REQUEST   = 'COLUMNS_ADD_REQUEST'
export const COLUMNS_ADD_SUCCESS   = 'COLUMNS_ADD_SUCCESS'
export const COLUMNS_ADD_FAILURE   = 'COLUMNS_ADD_FAILURE'
export const COLUMNS_EDIT_REQUEST  = 'COLUMNS_EDIT_REQUEST'
export const COLUMNS_EDIT_SUCCESS  = 'COLUMNS_EDIT_SUCCESS'
export const COLUMNS_EDIT_FAILURE  = 'COLUMNS_EDIT_FAILURE'

// Action creators
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
