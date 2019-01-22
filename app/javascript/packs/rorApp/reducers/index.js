import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rows from './rows'
import columns from './columns'
import {fetchRows} from '../actions'

const initialState = {
  rows: {
    isFetching: true,
    items: []
  },
  columns: [
    {id: 'c1', title: 'Name', type: 'text',   isRequired: true},
    {id: 'c2', title: 'Level', type: 'number', isRequired: true},
    {id: 'c3', title: 'Birthsday',   type: 'date',   isRequired: false},
    {id: 'c4', title: 'Sex', type: 'select', isRequired: true, options: ['Male', 'Female']},
  ],
}

const rootReducer = combineReducers({
  columns,
  rows,
})

const store = createStore(
  rootReducer,
  initialState,    //remove initial population here
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
    )
  )
)

store.dispatch(fetchRows()).then(() => console.log(store.getState()))


export default store
