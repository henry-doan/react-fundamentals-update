import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    super();
    this.state = {items: []}
  }

  componentWillMount(){
    fetch( 'http://swapi.co/api/people/?format=json' )
      .then( response => response.json() )
      .then( ({results: items}) => this.setState({items}))
  }

  render(){
    let items = this.state.items
    return (
      <div>
      // at this point we get an error of each child in an array should have a unique key prop.
        {items.map(item => 
          <h4>{item.name}</h4>)}
      </div>
    )
  }

}


export default App

