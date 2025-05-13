/** Header component */
import './Header.css';


function Header() {
  // const location = useLocation();

  return (
    <header className="header">
      <ul>
        <li>DB</li>
        <li>About</li>
        <li>Projects</li>
        <li /**Contact form */>Contact</li>
        <li>dark/light mode</li>
      </ul>
    </header>
  );
}
export default Header;