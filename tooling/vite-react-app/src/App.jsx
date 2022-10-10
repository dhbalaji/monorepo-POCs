import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App({focusHandler}) {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://vitest.dev" target="_blank" rel="noreferrer">
          <img src="https://vitest.dev/logo-shadow.svg" className="logo react" alt="Vitest logo" />
        </a>
      </div>
      <h1>Vite + React + Vitest</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onFocus={() => {
          focusHandler?.();
        }
          } data-testid="doe">
          Dummy Btn
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
