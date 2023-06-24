import { useNavigate } from 'react-router-dom';
import '../Styling/Navbar.css'

const Navbar = () => {
  const navigate = useNavigate()

  const handleAboutClick = () => {
    navigate('/about')
  }

  const handleContactClick = () => {
    navigate('/contact')
  }
  const handleHomeClick = () => {
    navigate('/')
  }

  return (
    <nav>
      <section className="nav-options">
        <p className="nav-links" onClick={handleHomeClick}>Home</p>
        <p className="nav-links" onClick={handleAboutClick}>About</p>
        <p className="nav-links" >Projects</p>
        <p className="nav-links" onClick={handleContactClick}>Contact</p>
      </section>
    </nav>
  );
};

export default Navbar;
