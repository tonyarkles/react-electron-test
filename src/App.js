import React, { Component } from 'react';
import logo from './logo.svg';
import '@blueprintjs/core/dist/blueprint.css';
import './App.css';

const electron = window.require('electron');
const {dialog} = electron.remote;
const {ipcRenderer} = electron;

ipcRenderer.on('fslist', (event, arg) => {
  console.log("event", event, arg);
});

console.log("sending request");
ipcRenderer.send('fsreq', '');

const openFile = () => {
  dialog.showOpenDialog({properties: ['openFile', 'openDirectory', 'multiSelections']});
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="pt-navbar pt-dark">
          <div className="pt-navbar-group pt-align-left">
            <div className="pt-navbar-heading">Test System!</div>
            <input className="pt-input" placeholder="Search..." type="text" />
          </div>
        </nav>
      </div>
    );
  }
}

export default App;
