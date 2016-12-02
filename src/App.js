import React from 'react';

class App extends React.Component {
  render(){
    // the right way to render something
    // best practice way
    return (
      <div>
        <h1>Hello World!</h1>
        <b>Bold</b>
      </div>
    )

    /* 
      the reason why just this doesn't work
      
        return <h1>Hello world!</h1> <br/>

      is because its is trying to do:

        return React.createElement('', , ) React.createElement('', , )
      one after the other, which is invaid.

    */

    /*
      another way to write the above and works just fine is:

      return <div>
          <h1>Hello World!</h1>
          <b>Bold</b>
        </div>

    */
  }
}

export default App

