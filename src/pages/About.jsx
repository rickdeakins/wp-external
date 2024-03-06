import AboutText from '../components/AboutText';

const bodyStyle = {
  margin: "20%",
  textAlign: "left",
}

const headingStyle= {
  color:'#009999', 
  marginTop: '15%',
  textAlign: 'left'
}

const imageStyle = {
  maxWidth: '70%', 
  border: '2px solid', 
  borderRadius: '3%', 
  marginTop:'10%', 
  marginLeft: '10%',
  // marginBottom: '20%'
}

export default function About() {
  return (
<div className="bg-light container-flex">
  <div className="body" style={bodyStyle}>
      <div className="row">
        {/* Left column for text */}
        <div className="col-lg-7">
          <h2 class="heading" style={headingStyle}>About</h2>
          <AboutText />
        </div>

        {/* Right column for image */}
        <div className="col-lg-5 align-items-center">
        <img className="mariaImage" src="images/MariaWP.png" alt="maria" style={imageStyle} /> 
        </div>
      </div>
    </div>
</div>  
  
  );
}