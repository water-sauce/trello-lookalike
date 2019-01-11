import React, { Component } from 'react';
// import logo from './logo.svg';
// <img src={} className="App-logo" alt="logo" />
import Application from './containers/Application2';
import Form from './containers/Form';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <a>Trella</a>
        </header>
        <section className="app-body">
          <Application />
          <Form />
        </section>
      </div>
    );
  }
}

export default App;
