import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    super();
    this.state = {a: ''}
    this.update = this.update.bind(this)
  }

  update(e){
    /* 
      when we don't use refs, this will update both
      the a and b at the same time which is what we
      don't want.

        this.setState({a: e.target.value})
        this.setState({b: e.target.value})
    */
    this.setState({
      /* 
        this only works since the other component has one node in the return
        but if we wrap it in a div or have it with other node, it would then 
        reference the this to the div and not the values we want.

        in order to fix this problem:
          a: this.a.refs.input.value
        we should be more clean on the targeting.
      */
      a: ReactDOM.findDOMNode(this.a).value,
      b: this.refs.b.value
    })
  }

  render(){
    return (
      <div>
        <Input
          /* ref  attribut or prop can also 
            take a call back.

            ref={ node => this.a = node }
            type="text"
            onChange={this.update.bind(this)}
            /> {this.state.a}
          */

          ref={ component => this.a = component }
          update={this.update.bind(this)}
          /> {this.state.a}
        <hr />
        <input
          ref="b"
          type="text"
          onChange={this.update.bind(this)}
          /> {this.state.b}
      </div>
    )
  }
}

/*
  refs is a reference to a node, or an instance of a component
  in our application.

  we can also use references an instance of another component
*/

class Input extends React.Component {
  render() {
    return <input type="text" onChange={this.props.update}/>
    /*
      (
        <div>
          <input ref="input" type="text" onChange={this.props.update}/>
        </div>
      )
    */
  }
}

export default App

