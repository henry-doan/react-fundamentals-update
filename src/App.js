import React from 'react';
import './style.css'

class App extends React.Component {
  render(){
    return (
      <Parent>
        <div className="childA"></div>
        <div className="childB"></div>
      </Parent>
    )
  }
}

class Parent extends React.Component {
  render() {
    {/* 
      let items = React.Children.map(this.props.children, child => child)
        works the same as the code below
      let items = React.Children.toArray(this.props.children)
    
      For each method
        let items = React.Children.forEach(this.props.children, child => console.log(child.props.className))

    */}

    // only needs one child
    let items = React.Children.only(this.props.children)
    console.log(items)
    return null
  }
}

export default App

