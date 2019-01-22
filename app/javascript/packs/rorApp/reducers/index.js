import { combineReducers, createStore } from 'redux'
import rows from './rows'
import columns from './columns'

const initialState = {
  rows: [
    {id: 'r1', values: {
      'c1': 'John',
      'c2': 25,
    }},
    {id: 'r2', values: {
      'c1': 'Mary',
      'c2': 19,
      'c3': '2019-01-09',
      'c4': 'Female',
    }},
    {id: 'r3', values: {
      'c1': 'Bill',
      'c2': 37,
      'c4': 'Male',
    }},
  ],
  columns: [
    {id: 'c1', title: 'Name', type: 'text',   isRequired: true},
    {id: 'c2', title: 'Level', type: 'number', isRequired: true},
    {id: 'c3', title: 'Birthsday',   type: 'date',   isRequired: false},
    {id: 'c4', title: 'Sex', type: 'select', isRequired: true, options: ['Male', 'Female']},
  ],
}

const App = combineReducers({
  columns,
  rows,
})

const store = createStore(
  App,
  initialState,    //remove initial population here
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  //for Redux Dev Tools browser addon
)

export default store
