import { useState } from 'react'
import Header from './header/Header'
import Home from './home/Home'
import AboutUs from './aboutus/AboutUs'
import Services from './services/Services'
import Blog from './blog/Blog'
import ContactUs from './contactus/ContactUs'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Header />

      <main className="card">
        <Home />
        <AboutUs />
        <Services />
        <Blog />
        <ContactUs />

        <button type="button" onClick={() => setCount((c) => c + 1)}>
          count is {count}
        </button>
        <p className="subtle">State + event handler example</p>
      </main>
    </div>
  )
}
