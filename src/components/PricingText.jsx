const headerStyle = {
    color:'#495057', 
}

const textStyle = {
    color:'#000000' 
}

const textBody= {
    // textAlign: 'left',
    // margin: '0 30%'
}

const PricingText = () => {
    return(
   <div style={{margin: '0 37%', border: '2px solid', borderRadius: '3%' , backgroundColor: '#fffcf9', padding: '3%', boxShadow: '2px 2px 4px rgba(1, 1, 1, 0.5)'}}> 
   <div class="text align-items-center" style={textBody}>
        <h4 style={headerStyle}><strong>Pricing</strong></h4>
            <p style={textStyle}>Initial Consult: $300</p>
            <p style={textStyle}>Follow Up Visits: $125</p>
            <p style={textStyle}>Virtual Visit: $60</p><br/>
        <h4 style={headerStyle}><strong>Bundling Options</strong></h4>
            <p style={textStyle}>3-Visit Bundle for $350 ($25 Savings)</p>
            <p style={textStyle}>4-Visit Bundle for $400 ($100 Savings)</p><br/>
   </div></div>
   )
}

export default PricingText;