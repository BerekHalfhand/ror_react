import * as C from '../constants'

function filters(state = [], action) {
  let items = []

  switch (action.type) {
    case C.FILTERS_FETCH:
    case C.FILTERS_REMOVE:
      let {filters} = action.payload
      return filters

    case C.FILTERS_ADD:
      let {filter} = action.payload
      if (state.items) items = state.items.slice(0)
      items.push(filter)

      return Object.assign({}, state, {
        isActive: true,
        items: items,
      })

    case C.FILTERS_TOGGLE:
      let {value} = action.payload
      return Object.assign({}, state, {
        isActive: value || !state.isActive,
      })

    default:
      return state
  }
}

export default filters
