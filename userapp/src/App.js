import React, { Component } from 'react'
import Registerform from './components/Registerform';
import './App.css';


class App extends Component {
  constructor(props){
    super(props)
  }
  render(){
  return (
    <div className="App">
      
      <Registerform />
      
    </div>
  );
}
}

export default App;
