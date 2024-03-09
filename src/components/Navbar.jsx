import { Link, useLocation } from 'react-router-dom';

const navBack = {
  backgroundColor: '#FAF7F4',
}

const navStyle = {
  color: '#495057',
  backgroundColor: '#efe6dd',
  borderRadius: '0',
  boxShadow: '1px 1px 1px rgba(0, 0, 0, 0.25)'

}

const currentPageStyle = {
  color: '#212529',
  backgroundColor: '#fffcf9',
  borderRadius: '0',
  boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.35)'
}



function Nav() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs justify-content-center mt-20" style={navBack}>
      <li className="nav-item">
        <Link to="/Home"
          className={currentPage === '/Home' ? 'nav-link active' : 'nav-link'} style={currentPage === '/Home' ? currentPageStyle : navStyle}>
          Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/About"
          className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}style={currentPage === '/About' ? currentPageStyle : navStyle}>About</Link>
      </li>
      <li className="nav-item">
        <Link to="/Pricing"
          className={currentPage === '/Pricing' ? 'nav-link active' : 'nav-link'}style={currentPage === '/Pricing' ? currentPageStyle : navStyle}>Pricing</Link>
      </li>
      <li className="nav-item">
        <Link to="/FAQ"
          className={currentPage === '/FAQ' ? 'nav-link active' : 'nav-link'}style={currentPage === '/FAQ' ? currentPageStyle : navStyle}>FAQ</Link>
      </li>
      <li className="nav-item">
        <Link to="/Contact"
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}style={currentPage === '/Contact' ? currentPageStyle : navStyle}>Request Info</Link>
      </li>
    </ul>
  );
}

export default Nav;
