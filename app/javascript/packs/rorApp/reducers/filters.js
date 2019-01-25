import {
  FILTERS_FETCH,
  FILTERS_ADD,
  FILTERS_REMOVE,
  FILTERS_TOGGLE,
} from '../actions'

function filters(state = [], action) {
  let items = []

  switch (action.type) {
    case FILTERS_FETCH:
    case FILTERS_REMOVE:
      let {filters} = action.payload
      return filters

    case FILTERS_ADD:
      let {filter} = action.payload
      if (state.items) items = state.items.slice(0)
      items.push(filter)

      return Object.assign({}, state, {
        isActive: true,
        items: items,
      })

    case FILTERS_TOGGLE:
      let {value} = action.payload
      return Object.assign({}, state, {
        isActive: value || !state.isActive,
      })

    default:
      return state
  }
  return state
}

export default filters
