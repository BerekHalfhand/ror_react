import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rows from './rows'
import columns from './columns'
import {fetchRows, fetchColumns} from '../actions'

const initialState = {
  rows: {
    isFetching: true,
    items: [],
  },
  columns: {
    isFetching: true,
    items: [],
  },
}

const rootReducer = combineReducers({
  columns,
  rows,
})

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
    )
  )
)

store.dispatch(fetchRows()).then((rows) => console.log("Rows are loaded:", rows))
store.dispatch(fetchColumns()).then((columns) => console.log("Columns are loaded:", columns))

export default store
