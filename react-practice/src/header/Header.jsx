import viteLogo from '../assets/vite.svg'

export default function Header() {
  return (
    <header className="app-header">
      <div className="brand">
        <img src={viteLogo} className="logo" alt="App logo" />
        <span className="brand-name">React practice</span>
      </div>

      <nav className="nav-menu" aria-label="Primary navigation">
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact Us</a>
      </nav>
    </header>
  )
}
