import React from 'react';
import ReactDOM from 'react-dom';

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

  /* 
    This allows us to set the state or intercept the
    state before it actually rendered.
  */

  componentWillMount(){
    console.log('componentWillMount')
    this.setState({m: 2})
  } 


  render(){
    console.log('render');
    return <button onClick={this.update}>
      {this.state.val * this.state.m}
    </button>
  }

  /*
    We have access to our component in the DOM
    When it is mounted, it shows the node,
    and incrament the interval

  */

  componentDidMount() {
    console.log('componentDidMount')
    console.log(ReactDOM.findDOMNode(this))
    this.inc = setInterval(this.update, 500)
  }

  /*
    This will stop the incrementation when the
    component is unMounted.
  */

  componentWillUnmount(){
    console.log('componentWillUnmount')
    clearInterval(this.inc)
  }
}

/*
  Mounting  
    - When a component is added to the DOM
  UnMounting
    - When a component is removed from the DOM

  There are a hand full of life-cycle methods we can
  access at various stages of the state
*/

/*
  This component below will toggle between mount and unMount.
*/

class Wrapper extends React.Component {
  mount(){
    ReactDOM.render(<App />, document.getElementById('a'))
  }

  unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }

  render(){
    return (
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>UnMount</button>
        <div id="a"></div>
      </div>
    )
  }
}


export default Wrapper

