import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    /* 
      super will give use the key word this
      the context within our component rather 
      than it's current class.
    */

    /* 
      the call of this.setState only overide the
      values we actually send in to it.
    */

    this.state = {
      txt: 'this is the state text',
      cat: 0
    }
    // this is managed by our component

  }

  // this is a custom method
  update(e) {
    this.setState({txt: e.target.value})
  }

  render(){
    return (
      <div>
        <input 
          type=""
          onChange={this.update.bind(this)}
        />
        <h1>{this.state.txt} - {this.state.cat}</h1>
      </div>
    )
  }
}

/*
  props
    - are a collections of values that are meant
      to be passed in to our component at static
      values not to be changed by our component

  state
    - represent a collection of values that is 
      meant to be managed as well as updated by
      the component(s)
*/

export default App

