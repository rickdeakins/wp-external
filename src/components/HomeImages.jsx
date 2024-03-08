import { Link } from 'react-router-dom';


const mainImageStyle = {
    maxWidth: '90%', 
    minWidth: '30%',
    border: '3px solid',
    borderRadius: '2%'
}

const subImageStyle = {
    maxWidth: '23%', 
    // minWidth: '23%',
    border: '3px solid',
    borderRadius: '2%',
    marginBottom: '10%'
}

const homepageMain = {
    display: 'flex',
    flexDirection: 'column'
}

const homepageAlt = {
    display: 'flex', 
    justifyContent: 'center'
}


function HomeImages() {
    return (
        <div className="homepageImages align-items-center" style={{minWidth: '50%'}} >
            <div className="main-image">
                <Link to="/About">
                    <img src="./images/patient.jpeg" alt="Main Image" style={{ width: '40%', height: 'auto', borderRadius: '2%', boxShadow: '2px 2px 4px rgba(1, 1, 1, 0.5)' }} />
                </Link>
            <div className="sub-image">
                <Link to="/Pricing">      
                <img src="./images/vancake.jpeg" alt="Sub Image 1" style={{ width: '20%', height: 'auto', borderRadius: '2%', boxShadow: '2px 2px 4px rgba(1, 1, 1, 0.5)' }} />
                </Link>
                <Link to="/FAQ">
                <img src="./images/vancake2.jpeg" alt="Sub Image 2" style={{ width: '20%', height: 'auto', borderRadius: '2%', boxShadow: '2px 2px 4px rgba(1, 1, 1, 0.5)'}} />
                </Link>
            </div></div>
        </div>  
 


    
    );
}


export default HomeImages;

