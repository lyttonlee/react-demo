import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'
import {Provider} from 'react-redux'

import store from './reducer/store'
import App from './App'
import './index.css'
const APP = (
  <Provider store = {store}>
    <BrowserRouter>
      <Route path='/' component = {App}>
      </Route>
    </BrowserRouter>
  </Provider>
  )
ReactDOM.render(APP, document.getElementById('root'))

