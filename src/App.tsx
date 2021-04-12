import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

const  HelloWorld = ({title}:{title : string} )  =>  <h1>{title}</h1>



function App() {
    // var title=' Tout le momde';


    return (
    <div className="App">

        <HelloWorld title="Hello World"></HelloWorld>
      Bonjour

    </div>
  );
}

export default App;
