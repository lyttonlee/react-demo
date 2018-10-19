import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {List, InputItem, Button} from 'antd-mobile'

import {increament, decreament} from '../reducer/actions'

class Counte extends Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    increament: PropTypes.func.isRequired,
    decreament: PropTypes.func.isRequired,
  }
  state = {
    value: ''
  }
  inputChange = val => {
    const reg = /^[1-9]+[0-9]*]*$/
    const value = val
    // console.log(value)
    if (reg.test(value)) {
      const newvalue = parseInt(value)
      // console.log('ok')
      this.setState({
        value: newvalue
      })
    } else if (value === ''){
      this.setState({
        value: ''
      })
    } else {
      alert('请输入数字！')
    }
    
  }
  render() {
    // console.log(this.props)
    const {counter, increament, decreament} = this.props
    return (
      <div>
        <p>看我表演{counter}</p>
        <List>
          <InputItem value={this.state.value} placeholder='要加减的数字' type='number' clear onChange={value => this.inputChange(value)}>请输入</InputItem>
        </List>
        {/* <input type="text" placeholder='请输入要加减的数字' value = {this.state.value} onChange = {(e) => this.inputChange(e)}/> */}
        <Button type='warning' disabled={this.state.value === '' ? true : false} onClick={() => increament(this.state.value)}>+</Button>
        <Button type='primary' disabled={this.state.value === '' ? true : false} onClick={() => decreament(this.state.value)}>-</Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter
})

const mapDispatchToProps = {
  increament,
  decreament
}

export default connect(mapStateToProps, mapDispatchToProps)(Counte)

