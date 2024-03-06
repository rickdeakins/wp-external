const containerStyle = {
  paddingTop: '20%'
}

const imageStyle = {
  maxWidth: '25%', 
  borderRadius: '10%', 
  marginTop: '5%',
  marginBottom: '10%'
}

export default function Pricing() {
    return (
      <div className="bg-light container-fluid" style={containerStyle}>
        <div className="align-items-center">
          <img src="images/pricing-component.svg" alt="pricing" style={imageStyle} /> 
        </div>    
      </div>
       )
  }