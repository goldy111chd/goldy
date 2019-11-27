import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './pages/components/Navbar';
import Header from './pages/components/Header'
import About from './pages/components/About'
import{BrowserRouter,Route}from 'react-router-dom'

class App extends React.Component {
  render(){
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Route exect path="/" component={Header} />
      <Route exect path="/About" component={About} />
   
    </div>
    </ BrowserRouter>
  );
}
}

export default App;

