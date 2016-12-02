import React from 'react';

class App extends React.Component {
  render(){
    /*
      to access props
      - by interpolating
      - with this.props and the name of the prop
    */
    let txt = this.props.txt
    return <h1>{txt}</h1>
  }
}

/*
  we can defined the properties we are going to be looking for
  in our component by adding a property to our component called 
  PropTypes

  this is going to be an object which keys and values
  the keys is the name of the property
  and the values is the type of the value we are looking for.

*/

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

/*
  set default proptypes

*/

App.defaultProps = {
  txt: "this is the default props"
}

export default App

