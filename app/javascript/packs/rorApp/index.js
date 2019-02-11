import React from 'react'
import ReactDOM from 'react-dom'
import Root from './routes'
import store from './reducers'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Root store={store} />, document.getElementById('app'),
  )
})
