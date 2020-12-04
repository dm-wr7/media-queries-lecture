import { useState } from 'react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="App">
      <header className="header">
        <h1>THE ANDY ZONE</h1>
        <nav className="nav-bar">
          <p className="nav-item">Home</p>
          <p className="nav-item">About</p>
          <p className="nav-item">Contact</p>
        </nav>
        <img
          onClick={toggleMenu}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
          className="hamburger"
        />
        <nav className={`mobile-nav ${isMenuOpen ? null : 'mobile-nav-hide'}`}>
          <p className="mobile-nav-item">Home</p>
          <p className="mobile-nav-item">About</p>
          <p className="mobile-nav-item">Contact</p>
        </nav>
      </header>

      <div className={`red-box ${isMenuOpen ? 'red-box-animate' : null}`}></div>
    </div>
  )
}

export default App
