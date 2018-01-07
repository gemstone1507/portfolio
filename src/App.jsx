import React, { Component } from 'react';
import {reactLocalStorage} from 'reactjs-localstorage';

import Greeting from './components/Greeting.jsx';
import MainPage from './components/MainPage.jsx';
import './App.css';


let name = reactLocalStorage.getObject('1');
class App extends Component {



  

  render() {
    if(name.length === undefined){
      return (
        <div className="container">
        
          <Greeting />
  
        </div>
      )
    }
    else{
      return (
       <MainPage />
      )
    }
    

  }
}

export default App;
