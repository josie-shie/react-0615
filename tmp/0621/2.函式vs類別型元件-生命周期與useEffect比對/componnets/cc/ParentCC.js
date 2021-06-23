import React from 'react'
import ChildCC from './ChildCC'

class ParentCC extends React.Component {
  constructor() {
    super()
    this.state = {
      isChildLive: true,
    }
    console.log('ParentCC constructor')
  }

  componentDidMount() {
    console.log('ParentCC componentDidMount')
  }

  componentDidUpdate() {
    console.log('ParentCC componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('ParentCC componentWillUnmount')
  }

  render() {
    console.log('ParentCC render')

    return (
      <>
        <h1>類別型元件</h1>
        <br />
        <button
          onClick={() => {
            this.setState({ isChildLive: true })
          }}
        >
          Live
        </button>
        <button
          onClick={() => {
            this.setState({ isChildLive: false })
          }}
        >
          Die
        </button>
        <hr />
        {this.state.isChildLive ? <ChildCC /> : ''}
      </>
    )
  }
}

export default ParentCC
