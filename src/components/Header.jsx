import Nav from './Navbar';

const headerStyle = {
    backgroundColor: '#ffffff', 
    position: 'absolute', 
    top: 0, 
    left: 0, 
    right: 0
}

function Header(){
    return(
        <div className="text-white py-1 fixed-top" style={headerStyle}>
            <div className="container">
            <img src="public/logo.svg" alt="logo" style={{ alignItems: 'center', padding: '20px', maxWidth: '20%', color: '#000000' }} /> 
            </div>
            <Nav />
        </div>
        
    )
}

export default Header;
