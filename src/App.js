import React from 'react';

class App extends React.Component {
  render(){
    return <h1>Hello World!</h1>
    // This makes this
    // React.createElement('h1', null, 'Hello World')
    
    // the first is the html element
    // all custom react component needs to start with a capitol letter
    // lower case is a native element.
    // second arg is for props
    // the third arg can be another elment or a string for the inner html.   
  }
}

// stateless function component
// another way to make a component
// does not have state.
// const App = () => <h1>Hello world stateless</h1>
export default App

