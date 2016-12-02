import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
	//passing in a prop
	//the value over writes the default
	//removing it wil have the default value
  <App cat={3} txt="this is a prop txt" />,
  document.getElementById('root')
);
