import { Link, useLocation } from 'react-router-dom';

function Nav() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs justify-content-center mt-20">
      <li className="nav-item">
        <Link to="/Home"
          className={currentPage === '/Home' ? 'nav-link active' : 'nav-link'}>Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/About"
          className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}>About</Link>
      </li>
      <li className="nav-item">
        <Link to="/Pricing"
          className={currentPage === '/Pricing' ? 'nav-link active' : 'nav-link'}>Pricing</Link>
      </li>
      <li className="nav-item">
        <Link to="/FAQ"
          className={currentPage === '/FAQ' ? 'nav-link active' : 'nav-link'}>FAQ</Link>
      </li>
      <li className="nav-item">
        <Link to="/Contact"
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}>Request Info</Link>
      </li>
    </ul>
  );
}

export default Nav;
