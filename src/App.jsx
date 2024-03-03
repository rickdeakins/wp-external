// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/Navbar';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <div>
      <header className="text-white py-1 fixed-top margin-right">
        <div className="container">
        <img src="public/logo.svg" alt="logo" style={{ alignItems: 'center', maxWidth: '15%', margin: '2%' }} /> 
        </div>
        <Nav />
      </header>   
      <main>
        <Outlet />
      </main>
      <div id="footer" className="py-4"><strong>© 2024 Whole Practice Feeding Therapy</strong><br/>
          <p>Whole Person, Whole Family Dynamic, Whole Projection to Success</p>
      </div>
    </div>
  );
}

export default App;