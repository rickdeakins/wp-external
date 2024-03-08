import FAQText from '../components/FAQText';

const headingStyle= {
  color:'#495057', 
  textAlign: 'left'
}

const bodyStyle = {
 margin: '10%'
}

const imageStyle = {
  maxWidth: '70%', 
  border: '2px', 
  borderRadius: '3%', 
  marginTop:'10%', 
  marginLeft: '0%',
  boxShadow: '2px 2px 4px rgba(1, 1, 1, 0.5)'
}

export default function FAQ() {
      return (
<div className="bg-light container-fluid d-flex justify-content-center align-items-center" style={{ marginTop: '15%' }}>
  <div className="body" style={bodyStyle}>
      <div className="row">
        {/* Left column for text */}
        <div className="col-lg- text-left" style={{border: '2px', maxWidth: '50%', borderRadius: '3%' , backgroundColor: '#edf6f9', padding: '2%', boxShadow: '2px 2px 4px rgba(1, 1, 1, 0.5)', backgroundColor: '#fffcf9'}}>
          <h2 class="heading" style={headingStyle}>FAQ</h2>
          <FAQText />
        </div>
        {/* Right column for image */}
        <div className="col-lg-6 align-items-center">
        <img className="baby-portrait" src="images/babyportrait.jpeg" alt="babyportrait" style={imageStyle}/> 
        </div>
      </div>
    </div>
</div>  
  
  );
}