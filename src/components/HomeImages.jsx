import { Link } from 'react-router-dom';

function HomeImages() {
    return (
        <div className="homepageImages align-items-center" style={{minWidth: '50%'}} >
            <div className="main-image">
                <Link to="/About">
                    <img src="./images/patient.jpeg" alt="Main Image" style={{ width: '40%', height: 'auto', borderRadius: '2%', boxShadow: '2px 2px 4px rgba(1, 1, 1, 0.5)' }} />
                </Link>
            <div className="sub-image-container">
                <Link to="/Pricing">      
                <img className="sub-image" src="./images/vancake.jpeg" alt="Sub Image 1" style={{ width: '20%', height: 'auto', borderRadius: '2%', boxShadow: '2px 2px 4px rgba(1, 1, 1, 0.5)'}} />
                </Link>
                <Link to="/FAQ">
                <img className="sub-image" src="./images/vancake2.jpeg" alt="Sub Image 2" style={{ width: '20%', height: 'auto', borderRadius: '2%', boxShadow: '2px 2px 4px rgba(1, 1, 1, 0.5)'}} />
                </Link>
            </div></div>
        </div>  
    );
}

export default HomeImages;

