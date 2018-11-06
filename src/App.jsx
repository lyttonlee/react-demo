import React, { Component } from 'react'
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'
import {NavBar, Icon, Toast} from 'antd-mobile'

import Home from './views/Home'
import Counte from './views/Counte'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  back = () => {
    console.log(this.props)
    this.props.history.goBack()
  }
  search = () => {
    Toast.info('真是抱歉！这个Demo太简单了，还没有搜索功能！', 4)
  }
  render() {
    // const {}
    return (
      <div>
        <NavBar
          className='topbar'
          mode="dark"
          leftContent={[
            <Icon type="left" key="0" />,
            "Back"
          ]}
          onLeftClick = {() => this.back()}
          rightContent={[
            <Icon onClick={() => this.search()} key="0" type="search" style={{ marginRight: '16px' }} />,
            // <Icon key="1" type="ellipsis" />,
          ]}
        >path: {this.props.location.pathname}</NavBar>
        
        <div className="App">
          <img src={logo} className="App-logo" alt="logo" /> 
          <Switch>
            <Route path='/comments' component = {Home}/>
            <Route path='/counte' component = {Counte}/>
            <Redirect to='/home'/>
          </Switch>
        </div>
        <div className='footbar'>
          <NavLink activeClassName='active' className='nav' to='/comments'>comments</NavLink>
          <NavLink activeClassName='active' className='nav' to='/counte'>counte</NavLink>
        </div>
      </div>
    )
  }
}

export default App
