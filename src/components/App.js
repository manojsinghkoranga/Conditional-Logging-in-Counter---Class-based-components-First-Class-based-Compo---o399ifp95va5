import React from 'react'
import '../styles/App.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {count:0}
  }

  shouldComponentUpdate(nextProps, nextState) {
    const isCountEven = nextState.count % 2 === 0;
    if (isCountEven) {
      return true;
    }
    return false;
  }

  handleClick = () => {
    this.setState({count: this.state.count + 1})
  }


  render(){
    console.log(`Rendering with count:-${this.state.count}`)
    return(
      <div>
        <span id="count">{this.state.count}</span>
        <button id="incr-btn" onClick={this.handleClick}>Increment</button>
      </div>
    )
  }
}

export default App;
