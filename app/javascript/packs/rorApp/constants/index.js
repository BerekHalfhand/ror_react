//Constants
export const COLUMNS_FETCH            = 'COLUMNS_FETCH'
export const COLUMNS_ADD_REQUEST      = 'COLUMNS_ADD_REQUEST'
export const COLUMNS_ADD_SUCCESS      = 'COLUMNS_ADD_SUCCESS'
export const COLUMNS_ADD_FAILURE      = 'COLUMNS_ADD_FAILURE'
export const COLUMNS_EDIT_REQUEST     = 'COLUMNS_EDIT_REQUEST'
export const COLUMNS_EDIT_SUCCESS     = 'COLUMNS_EDIT_SUCCESS'
export const COLUMNS_EDIT_FAILURE     = 'COLUMNS_EDIT_FAILURE'
export const COLUMNS_DELETE_REQUEST   = 'COLUMNS_DELETE_REQUEST'
export const COLUMNS_DELETE_SUCCESS   = 'COLUMNS_DELETE_SUCCESS'
export const COLUMNS_DELETE_FAILURE   = 'COLUMNS_DELETE_FAILURE'

export const ROWS_FETCH               = 'ROWS_FETCH'
export const ROWS_ADD_REQUEST         = 'ROWS_ADD_REQUEST'
export const ROWS_ADD_SUCCESS         = 'ROWS_ADD_SUCCESS'
export const ROWS_ADD_FAILURE         = 'ROWS_ADD_FAILURE'
export const ROWS_EDIT_REQUEST        = 'ROWS_EDIT_REQUEST'
export const ROWS_EDIT_SUCCESS        = 'ROWS_EDIT_SUCCESS'
export const ROWS_EDIT_FAILURE        = 'ROWS_EDIT_FAILURE'

export const FILTERS_FETCH            = 'FILTERS_FETCH'
export const FILTERS_ADD              = 'FILTERS_ADD'
export const FILTERS_REMOVE           = 'FILTERS_REMOVE'
export const FILTERS_TOGGLE           = 'FILTERS_TOGGLE'


//Utility functions

//does a given collection contain a given id,
//returns bool
export const isItemPresent = (collection, id) => {
  let res = false
  collection.map((item) => {
    if (item.id() == id) res = true
  })
  return res
}

//assigns .id() to each object from mongo, to replace getting id by ._id.$oid,
//returns array
export const identify = (arr) => {
  if (!$.isArray(arr)) return arr
  let res = []
  arr.map((item) => {
    item.id = () => {return item._id.$oid}
    res.push(item)
  })
  return res
}
