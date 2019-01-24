import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
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
store.dispatch(loadFilters())//.then((filters) => console.log("Filters are loaded:", filters))

export default store
