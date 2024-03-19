import Nav from './Navbar';

function Header(){
    return(
        <div className="headerstyle text-white py-1 fixed-top" >
            <div className="container">
                <img src="public/logo.svg" alt="logo" className="logoStyle"/> 
            </div>
            <Nav />
        </div>   
    )
}

export default Header;
