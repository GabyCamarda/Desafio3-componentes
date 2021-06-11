import React, { Component } from 'react';
import './App.css';

// Importa los componentes
import Header from './components/Header/Header';
import BtnComponent from './components/BtnComponent/BtnComponent';
import Section from './components/Section/Section';

class App extends Component {
  render() {
    return (
			<div className='App'>
				<Header />
        <h1>Prueba Componentes en React JS!</h1>  
      </div>
    )
  }
}

export default App;
