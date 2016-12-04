import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {val: 0}
    this.update = this.update.bind(this)
  }

  update(e){
    //increment by 1
    this.setState({val: this.state.val + 1})
  }

  render(){
    console.log('render');
    return <button onClick={this.update}>{this.state.val}</button>
  }
}

/*
  Mounting  
    - When a component is added to the DOM
  UnMounting
    - When a component is removed from the DOM

  There are a handfull of lifecycle methods we can
  access at various stages of the state
*/



export default App

