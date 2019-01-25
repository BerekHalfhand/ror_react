import * as C from '../constants'

// Action creators
export const fetchFilters = (filters) => ({ type: C.FILTERS_FETCH, payload: {filters} })
export const addFilters = (filter) => ({ type: C.FILTERS_ADD, payload: {filter} })
export const removeFilters = (filters) => ({ type: C.FILTERS_REMOVE, payload: {filters} })
export const toggleFilters = (value) => ({ type: C.FILTERS_TOGGLE, payload: {value} })

function readStorage(key) {
  let res = sessionStorage.getItem(key)
  if (res)  res = JSON.parse(res)
  else      res = { isActive: true, items: [] }
  return res
}

export function loadFilters() {
  return function(dispatch) {
    let filters = readStorage('filters')

    dispatch(fetchFilters(filters))
  }
}

export function addFilter(filter) {
  return function(dispatch) {
    let filters = readStorage('filters')

    if (filters && filters.items)
      filters.items.push(filter)

    sessionStorage.setItem('filters', JSON.stringify(filters))
    dispatch(addFilters(filter))
  }
}

export function removeFilter(columnId) {
  return function(dispatch) {
    let filters = readStorage('filters'),
        index = -1

    if (!columnId) {  //if there's no id specified, erase all filters
      sessionStorage.removeItem('filters')
      dispatch(removeFilters({ isActive: true, items: [] }))
    } else {          //otherwise, find and destroy
      if (filters && filters.items) {
        filters.items.map((item, i) => {
          if (item.column == columnId) index = i
        })

        if (index > -1) {
          filters.items.splice(index, 1)
          sessionStorage.setItem('filters', JSON.stringify(filters))

          dispatch(removeFilters(filters))
        }
      }
    }
  }
}
