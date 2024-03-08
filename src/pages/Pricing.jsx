import PricingText from '../components/PricingText';


const containerStyle = {
  alignItems: 'center',
  paddingTop: '20%',
  paddingBottom: '10%'
}

const imageStyle = {
  maxWidth: '25%', 
  borderRadius: '10%', 
  marginTop: '5%',
  marginBottom: '10%'
}

export default function Pricing() {
    return (
      <div className="bg-light align-items-center" style={containerStyle}>
        {/* <div className="align-items-center">
          <img src="images/pricing-component.svg" alt="pricing" style={imageStyle} /> 
        </div>     */}
      <PricingText />
      </div>
       )
  }