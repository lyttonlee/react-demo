import React, { Component } from 'react'
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'
import {NavBar, Icon} from 'antd-mobile'

import Home from './views/Home'
import Counte from './views/Counte'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  back = () => {
    console.log(this.props)
    this.props.history.goBack()
  }
  render() {
    return (
      <div>
        <NavBar
          mode="dark"
          leftContent="Back"
          onLeftClick = {() => this.back()}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />,
          ]}
        >NavBar</NavBar>
        <header>
          <img src={logo} className="App-logo" alt="logo" />
          <NavLink to='/home'>home</NavLink>
          <NavLink to='/counte'>counte</NavLink>
        </header>
        <div className="App">
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
