import AboutText from '../components/AboutText';

const containerStyle = {
  paddingTop: '20%',
  paddingBottom: '10%',
}

const bodyStyle = {
  margin: "0 20%",
  textAlign: "left",
}

const headingStyle= {
  // color:'#009999', 
  textAlign: 'left'
}

const imageStyle = {
  maxWidth: '70%', 
  border: '2px', 
  borderRadius: '3%', 
  marginTop:'10%', 
  marginLeft: '10%',
  boxShadow: '2px 2px 4px rgba(1, 1, 1, 0.5)'
}

export default function About() {
  return (
<div className="bg-light container-flex" style={containerStyle}>
  <div className="body" style={bodyStyle}>
      <div className="row">
        {/* Left column for text */}
        <div className="col-lg-7" style={{border: '2px', maxWidth: '50%', borderRadius: '3%' , backgroundColor: '#fffcf9', padding: '2%', boxShadow: '2px 2px 4px rgba(1, 1, 1, 0.5)'}}>
          <h2 class="heading" style={headingStyle}>About</h2>
          <AboutText />
        </div>

        {/* Right column for image */}
        <div className="col-lg-5 align-items-center">
        <img className="mariaImage" src="images/MariaWP.png" alt="maria" style={imageStyle}/> 
        </div>
      </div>
    </div>
</div>  
  
  );
}