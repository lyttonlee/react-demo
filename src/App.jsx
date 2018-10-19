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
    // const {}
    return (
      <div>
        <NavBar
          className='topbar'
          mode="dark"
          leftContent="Back"
          onLeftClick = {() => this.back()}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />,
          ]}
        >{this.props.location.pathname}</NavBar>
        
        <div className="App">
          <img src={logo} className="App-logo" alt="logo" /> 
          <Switch>
            <Route path='/home' component = {Home}/>
            <Route path='/counte' component = {Counte}/>
            <Redirect to='/home'/>
          </Switch>
        </div>
        <div className='footbar'>
          <NavLink activeClassName='active' className='nav' to='/home'>home</NavLink>
          <NavLink activeClassName='active' className='nav' to='/counte'>counte</NavLink>
        </div>
      </div>
    )
  }
}

export default App
