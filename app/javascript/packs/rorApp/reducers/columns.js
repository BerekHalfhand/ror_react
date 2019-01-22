import {
  COLUMNS_FETCH,
  COLUMNS_ADD,
  COLUMNS_EDIT,
} from '../actions'

function columns(state = [], action) {
  switch (action.type) {
    case COLUMNS_FETCH:
      return state
    case COLUMNS_ADD:
      console.log('addColumn action -> ', action)
      let i = state.length+1,
          column = action.payload.column,
          options = action.payload.column.options.split(',')

      column = {
        id: `c${i}`,
        title: column.title,
        isRequired: column.isRequired,
        type: column.type,
        options: options,
      }

      let newState = state.slice(0)
      newState.push(column)

      return newState
    case COLUMNS_EDIT:
      return state
    default:
      return state
  }
}

export default columns
