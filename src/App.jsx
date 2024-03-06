// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <div>
      <header className="text-white py-1 fixed-top">
        <Header />
      </header>   
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;