import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const electron = window.require('electron');
const {dialog} = electron.remote;

const openFile = () => {
  dialog.showOpenDialog({properties: ['openFile', 'openDirectory', 'multiSelections']});
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React and Electron and Foreman and Other Stuff</h2>
        </div>
        <button onClick={openFile}>Open</button>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
