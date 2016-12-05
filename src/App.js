import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    super();
    this.state = {increasing: false};
    this.update = this.update.bind(this);
  }

  update(e){
    ReactDOM.render(<App val={this.props.val + 1}/>, document.getElementById('root'))
  }

  /*
    componentWillReceiveProps
      - the first updating lifecycle methods we can look at is component will receive
      props. New properites are coming in and can access the props with the variable 
      next props.

      - This gives us an opportunity to update state by reacting to a prop transition
      before the render call is made

    We are going to set our state of increasing to next props.val is greater than this
    props.val.
  */

  componentWillReceiveProps(nextProps){
    this.setState({increasing: nextProps.val > this.props.val})
  }

  /*
    shouldComponentUpdate
      - Allows us to set conditions on when we should update a component so that we are
      not rendering over and over again.

      - This does not prevent our state, and the props to be updated. it just prevent a
      rerender.
  */

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.val % 5 === 0;
  }

  render(){
    console.log(this.state.increasing);
    return <button onClick={this.update}>
      {this.props.val}
    </button>
  }

  /*
    componentDidUpdate
      - This lets us react to the componenet updating.

      - This, in this case takes in our previous props and 
      previous state.

      - With this we can see that the state is being updated and
      our props are being updated as well
  */

  componentDidUpdate(prevProps, PrevState) {
    console.log(`prevProps: ${prevProps.val}`);
}

}

/*
  default props to have a value of 0
*/

App.defaultProps = {
  val: 0
}


export default App

