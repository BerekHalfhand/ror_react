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
    items: [
    {id: '1', column: '5c47dfb79375b058bf09214f', type: 'select', values: ['Male']},
    {id: '1', column: '5c4893e99375b058bf092150', type: 'text', values: ['Yuri']},
    {id: '1', column: '5c4894499375b058bf092151', type: 'number', values: [15, 50]},
    {id: '1', column: '5c4895649375b058bf092152', type: 'date', values: ['2016-01-01', '2020-01-01']}],
    // {},
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
