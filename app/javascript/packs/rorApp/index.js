import React from 'react'
import ReactDOM from 'react-dom'
import Root from './routes'
import { createStore } from 'redux'
import App from './reducers/index'

const data = {
  rows: [
    {id: 'r1', values: {
      'c1': 'str1',
      'c2': 123,
    }},
    {id: 'r2', values: {
      'c1': 'str2',
      'c2': 666,
      'c3': '2019-01-09',
      'c4': 'opt2',
    }},
    {id: 'r3', values: {
      'c1': 'str3',
      'c2': 0,
    }},
  ],
  columns: [
    {id: 'c1', title: 'String', type: 'text',   isRequired: true},
    {id: 'c2', title: 'Number', type: 'number', isRequired: true},
    {id: 'c3', title: 'Date',   type: 'date',   isRequired: true},
    {id: 'c4', title: 'Select', type: 'select', isRequired: true, options: ['opt1', 'opt2', 'opt3']},
  ],
}

const store = createStore(
  App, data,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Root store={store} />, document.getElementById('app'),
  )
});
