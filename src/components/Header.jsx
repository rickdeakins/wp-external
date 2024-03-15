import Nav from './Navbar';

const headerStyle = {
    backgroundColor: '#ffffff', 
    position: 'relative', 
    top: 0,
    left: 0, 
    right: 0
}

function Header(){
    return(
        <div className="headerstyle text-white py-1 fixed-top" >
            <div className="container">
            <img src="public/logo.svg" alt="logo" style={{ alignItems: 'center', padding: '10px', maxWidth: '15%', minWidth: '150px', color: '#000000' }} /> 
            </div>
            <Nav />
        </div>
        
    )
}

export default Header;
