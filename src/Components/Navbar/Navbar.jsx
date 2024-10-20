import { useEffect, useState } from 'react';
import logo from '../../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className="header">
        <nav className={`navbar ${sticky ? 'sticky' : ''}`}>
          <img src={logo} alt="Logo" className="logo" />
          <ul className="nav-list">
            <li>Home</li>
            <li>About</li>
            <li>Programs</li>
            <li>Prospects</li>
            <li><button className="btn">Contact</button></li>
          </ul>
        </nav>
        <div className="hero-content">
          <h1>Welcome to Our Website</h1>
          <p>Your journey starts here.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
