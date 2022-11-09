import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

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
        {/* Counter buttons */}
        <span className="flex gap-2 text-gray-900">
          <button
            className="p-2 border-none rounded-md bg-gray-200 hover:bg-gray-50 hover:scale-105 active:scale-100 transition-all"
            onClick={() => setCounter(counter - 1)}
          >
            Decrement
          </button>
          <button
            className="p-2 border-none rounded-md bg-gray-200 hover:bg-gray-50 hover:scale-105 active:scale-100 transition-all"
            onClick={() => setCounter(counter + 1)}
          >
            Increment
          </button>
        </span>
        {/* TODO: Add a component to display the counter here */}
      </header>
    </div>
  );
}

export default App;
