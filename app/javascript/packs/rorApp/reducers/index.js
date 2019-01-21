import { combineReducers } from 'redux'
import {
  ADD_COLUMN,
  ADD_ROW,
  EDIT_FIELD,
} from '../actions/index'

function columns(state = [], action) {
  switch (action.type) {
    case ADD_COLUMN:
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
    default:
      return state
  }
}

function rows(state = [], action) {
  let newState = []
  switch (action.type) {
    case ADD_ROW:
      // console.log('addRows action -> ', action)
      let {quantity} = action.payload,
          l = state.length+1,
          newRow

      newState = state.slice(0)

      for (let i = l; i < l + quantity; i++) {
        newRow = {id: `r${i}`, values: {}}
        newState.push(newRow)
      }

      return newState
    case EDIT_FIELD:
      // console.log('editField action -> ', action)
      let {row, column, value} = action.payload
      if (column.type === 'number') value = parseInt(value)

      state.forEach((v, i) => {
        if (v.id === row)
          if (v.values)
            v.values[column.id] = value

        newState.push(v);
      })

      return newState
    default:
      return state
  }
}

const App = combineReducers({
  columns,
  rows,
})

export default App
