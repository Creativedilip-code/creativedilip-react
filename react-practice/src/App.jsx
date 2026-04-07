import { useState } from 'react'
import viteLogo from './assets/vite.svg'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <header className="header">
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <h1>React practice</h1>
        <p className="hint">
          Edit <code>src/App.jsx</code> and save. Use this app to try hooks,
          components, and small UI ideas.
        </p>
      </header>

      <main className="card">
        <button type="button" onClick={() => setCount((c) => c + 1)}>
          count is {count}
        </button>
        <p className="subtle">State + event handler example</p>
      </main>
    </div>
  )
}
