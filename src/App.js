import React, { Component } from 'react';
import logo from './logo.svg';
import FacebookLogin from './components/facebookLogin';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Tobima App built with React</h2>

          <FacebookLogin facebookTest="Facebook load test." />

        </div>
      </div>
    );
  }
}

export default App;
