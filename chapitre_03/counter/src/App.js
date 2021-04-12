import React from 'react'
import './App.css'

import Counter from './components/Counter.jsx'

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      count: 0
    }

    this.decrementCount = this.decrementCount.bind(this)
    this.incrementCount = this.incrementCount.bind(this)
  }

  decrementCount() {
    const { count } = this.state

    if(count === 0) {
      return;
    } 
    
    this.setState({
      count: count - 1
    })
     
  }

  // decrementCount = () => {
  //   const { count } = this.state

  //   this.setState({
  //     count: count - 1
  //   })
  // }

  incrementCount() {
    const { count } = this.state

    this.setState({
      count: count + 1
    })

    // this.setState({
    //   count: this.state.count + 1
    // })
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>

        <Counter count={this.state.count} removeFunction={this.decrementCount} addFunction={this.incrementCount} />

      </div>
    )
  }
}

export default App