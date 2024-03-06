const listStyle = {
  textAlign: 'left',
  marginLeft: '5%'
}

const subHeadStyle = {
  textAlign: 'left',
  color:'#009999', 
}

const FAQText = () => {
    return(
    <div>
      <h5 class="subhead" style = {subHeadStyle}>What are typical feeding concerns for which parents would seek out feeding therapy?</h5>
        <ul style ={listStyle}>
            <li>Poor latch at breast or bottle</li>
            <li>Inefficiency with feeding (taking too long at the breast or bottle)</li>
            <li>Coughing or gagging at breast or bottle</li>
            <li>Concern for tongue tie</li>
            <li>Gagging when transitioning to blended foods (purée/traditional baby food)</li>
            <li>Gagging when transitioning to table foods (solids)</li>
            <li>Guidance with baby-led weaning</li>
            <li>Food refusal</li>
            <li>Self feeding refusal (my child will not feed themself)</li>
            <li>Poor transition to cups (my child will not accept a cup)</li>
        </ul><br/>
      
      <h5 class="subhead" style = {subHeadStyle}>Which areas does Whole Practice Feeding therapy offer in-home services?</h5>
        <ul style={listStyle}>
            <li>Within a 20 mile radius of Cleveland Ohio.</li> 
            <li>Farther visits will be considered upon request and may require additional mileage fee.</li><br/>   
        </ul><br/>

      <h5 class="subhead" style = {subHeadStyle}>Does Whole Practice Feeding Therapy accept insurance?</h5>
      <ul style ={listStyle}>
            <li>We do not accept insurance however we do accept HSA/FSA.</li>
            <li>No insurance headaches mean savings are passed down to you!</li>
            <li>No billing surprises</li>
            <li>No limited visits</li>
            <li>No coverage maximums</li>
            <li>No waitlists</li>
            <li>Lower costs compared to clinic visits for initial consultation and bundle visits.</li>
        </ul>     
    </div>
    
    )
}

export default FAQText;