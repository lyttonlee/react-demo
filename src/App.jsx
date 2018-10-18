import React, { Component } from 'react'
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'
import Home from './views/Home'
import Counte from './views/Counte'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
          <NavLink to='/home'>home</NavLink>
          <NavLink to='/counte'>counte</NavLink>
        </header>
        <div>
          <Switch>
            <Route path='/home' component = {Home}/>
            <Route path='/counte' component = {Counte}/>
            <Redirect to='/home'/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
