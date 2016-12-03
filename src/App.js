import React from 'react';

class App extends React.Component {
  render(){
    return <Title text="The Text" />
  }
}

const Title = (props) => <h1>Title: {props.text}</h1>

Title.propTypes = {
  // custom validations
  text(props, propName, component){
    // prop name is not provided
    if(!(propName in props)){
      return new Error(`missing ${propName}`)
    }

    // the length
    if(props[propName.length] < 6){
      return new Error(`${propName} was too short`)
    }
  }
}

export default App

