//React為預設導入，{ Component }為部分導入 useState不是來字React而是另外寫的
//每個程式只會有一隻預設導入
import React, { Component } from 'react' //最新版本可以省略這行
import logo from './logo.svg'
import './App.css'

//類別行元件 用class定義
class App extends Component {
  constructor() {
    super()
    this.state = {
      total: 0,
    }
  }

  render() {
    return (
      <h1
        onClick={() => {
          // setState繼承自Component
          this.setState({ total: this.state.total + 1 })
        }}
      >
        {this.state.total}
      </h1>
    )
  }
}

export default App
