import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  window.addEventListener('message', (message) => {
    console.log(message);
    document.getElementById('newStuff').innerHTML += `</br>${message.data}`;
  });

  window.ReactNativeWebView.postMessage("This is working!");

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
        <p id="newStuff"></p>
      </header>
    </div>
  );
}

export default App;
