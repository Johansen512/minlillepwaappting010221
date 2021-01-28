import React from 'react';
import logo from './logo.svg';
import './App.css';
import OneSignal from "react-onesignal";

OneSignal.initialize('bdd3a802-1273-48f5-96cb-ea87cd7f691d', {
  safari_web_id:"web.onesignal.auto.1947bcbb-3df5-45a5-b464-0be0e15f4a2c"
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
