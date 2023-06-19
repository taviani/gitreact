import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import logo from "./logo.svg";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div  className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="pastèque" />
        </header>
      </div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>

      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
        Pour l'instant tout se passe entre les sources sur <code>Github</code> et dans <code>DockerHub</code> via les actions
        </p>
      </div>
    </>
  )
}

export default App
