import { useState } from 'react'
import Header from './Header'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Header />

      <main className="card">
        <button type="button" onClick={() => setCount((c) => c + 1)}>
          count is {count}
        </button>
        <p className="subtle">State + event handler example</p>
      </main>
    </div>
  )
}
