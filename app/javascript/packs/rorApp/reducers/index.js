import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rows from './rows'
import columns from './columns'
import filters from './filters'
import {fetchRows, fetchColumns, loadFilters} from '../actions'

const initialState = {
  rows: {
    isFetching: true,
    items: [],
  },
  columns: {
    isFetching: true,
    items: [],
  },
  filters: {
    isActive: true,
    items: [],
  }
}

const rootReducer = combineReducers({
  columns,
  rows,
  filters,
})
let storeTmp = null

console.log(process.env.NODE_ENV)

if (process.env.NODE_ENV == 'development') {
  const devtools = require("redux-devtools-extension")

  storeTmp = createStore(
    rootReducer,
    initialState,
    devtools.composeWithDevTools(
      applyMiddleware(
        thunkMiddleware,
      )
    )
  )
} else {
    storeTmp = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunkMiddleware,
    )
  )
}

const store = storeTmp

//Initial data loading
store.dispatch(fetchRows()).then((rows) => console.log("Rows are loaded:", rows))
store.dispatch(fetchColumns()).then((columns) => console.log("Columns are loaded:", columns))
store.dispatch(loadFilters())

export default store
