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
    The order below corresponds to the order they fire in 
    the DOM

  */

  /* 
    ComponentWillMount
      - This is going to fire off right before it's
      is mounted on the DOM.

      - This insures that it will make it into the DOM

      - The componentWillMount only fire once and will
      ever fire once.
  */

  componentWillMount(){
    console.log('componentWillMount')
  } 


  render(){
    console.log('render');
    return <button onClick={this.update}>{this.state.val}</button>
  }

  /*
    ComponentDidMount
      - This is going to fire odd once our component has
      actually been mounted to the DOM

  */

  componentDidMount() {
    console.log('componentDidMount')
  }

  /*
    ComponentWillUnmount
      - This will fire when the component is about to leave
      the DOM
  */

  componentWillUnmount(){
    console.log('componentWillUnmount')
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

