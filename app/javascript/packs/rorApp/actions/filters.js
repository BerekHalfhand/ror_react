export const FILTERS_FETCH    = 'FILTERS_FETCH'
export const FILTERS_ADD      = 'FILTERS_ADD'
export const FILTERS_REMOVE   = 'FILTERS_REMOVE'
export const FILTERS_TOGGLE   = 'FILTERS_TOGGLE'


// Action creators
export const fetchFilters = (filters) => ({
  type: FILTERS_FETCH,
  payload: {
    filters
  }
})
export const addFilters = (filter) => ({
  type: FILTERS_ADD,
  payload: {
    filter
  }
})
export const removeFilters = (filters) => ({
  type: FILTERS_REMOVE,
  payload: {
    filters
  }
})
export const toggleFilters = (value) => ({
  type: FILTERS_TOGGLE,
  payload: {
    value
  }
})


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

    if (!columnId) {
      sessionStorage.removeItem('filters')
      dispatch(removeFilters({ isActive: true, items: [] }))
    } else {
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
