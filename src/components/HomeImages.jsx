import { Link } from 'react-router-dom';

function HomeImages() {
    return (
        <div className="homepageImages align-items-center" >
            <div className="imagesContainer">
                <Link to="/About">
                    <img src="./images/patient.jpeg" className="main-image" />
                </Link>
            <div className="sub-image-container">
                <Link to="/Pricing">      
                <img className="sub-image" src="./images/vancake.jpeg" alt="Sub Image 1" />
                </Link>
                <Link to="/FAQ">
                <img className="sub-image" src="./images/vancake2.jpeg" alt="Sub Image 2"/>
                </Link>
            </div></div>
        </div>  
    );
}


export default HomeImages;

