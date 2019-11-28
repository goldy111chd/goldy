import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './pages/components/Navbar';
import Header from './pages/components/Header'
import About from './pages/components/About';
import Apidatashow from './pages/components/Apidatashow';
import Login from './pages/components/Login';
import Signup from './pages/components/Signup';
import{BrowserRouter,Route}from 'react-router-dom'


class App extends React.Component {
  render(){
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Route exect path="/" component={Header} />
      <Route exect path="/About" component={About} />
      <Route exect path="/Apidatashow" component={Apidatashow} />
      <Route exect path="/Login" component={Login} />
      <Route exect path="/Signup" component={Signup} />
   
    </div>
    </ BrowserRouter>
  );
}
}

export default App;

