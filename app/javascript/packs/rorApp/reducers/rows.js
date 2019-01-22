import {
  ROWS_FETCH,
  ROWS_ADD,
  ROWS_EDIT,
} from '../actions'

function rows(state = [], action) {
  let newState = []
  switch (action.type) {
    case ROWS_FETCH:
      return state
    case ROWS_ADD:
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
    case ROWS_EDIT:
      console.log('editField action -> ', action)
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

export default rows
