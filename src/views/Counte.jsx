import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

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
  inputChange = e => {
    const reg = /^[1-9]+[0-9]*]*$/
    const value = e.target.value
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
        <input type="text" placeholder='请输入要加减的数字' value = {this.state.value} onChange = {(e) => this.inputChange(e)}/>
        <button onClick={() => increament(this.state.value)}>+</button>
        <button onClick={() => decreament(this.state.value)}>-</button>
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

