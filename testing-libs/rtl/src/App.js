import logo from "./logo.svg";
import "./App.css";

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
          Learn React Again
        </a>
      </header>
      <div id="app">
        <label htmlFor="username-input">Username</label>
        <input id="username-input" />
      </div>
    </div>
  );
}

export default App;
