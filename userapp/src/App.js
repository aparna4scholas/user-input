import React, { Component } from 'react'
import UserData from './components/UserData';
import './App.css';


class App extends Component {
  constructor(props){
    super(props)
  }
  render(){
  return (
    <div className="App">
      
      <UserData />
      
    </div>
  );
}
}

export default App;
