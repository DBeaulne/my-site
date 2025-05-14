/** Header component */
import { NavLink } from 'react-router-dom';
import './Header.css';


function Header() {
  // const location = useLocation();

  return (
    <header className="header">
      <div className="header__logo">
        <h5>DB</h5>
      </div>
      <nav className='header__nav'>
        <div className='header__nav-link'>
          <NavLink to="">
            <h5>About</h5>
          </NavLink>
        </div>
        <div className='header__nav-link'>
          <NavLink to="">
            <h5>Projects</h5>
          </NavLink>
        </div>
        <div className='header__nav-link'>
          <NavLink to="">
            <h5>Contact</h5>
          </NavLink>
        </div>
        <div className='header__nav-link'>
          <h5>d/l mode</h5>
        </div>
      </nav>
    </header>
  );
}
export default Header;