const bodyStyle = {
  margin: "20%",
  textAlign: "left",
}

const headingStyle= {
  color:'#009999', 
  marginTop: '15%',
}


export default function About() {
  return (
<div className="bg-light container-fluxx">
  <div className="body" style={bodyStyle}>
      <div className="row">
        {/* Left column for text */}
        <div className="col-lg-7">
          <h2 class="heading" style={headingStyle}>About</h2>
          <p>
            Maria Podolan is an Occupational Therapist and Certified Lactation Counselor. Maria has over 13 years of experience as a feeding therapist, working with children in variety of settings including expansive experience in the hospital and clinic settings. For the past 6 years, Maria has worked in collaboration with specialists including breastfeeding medicine to target feeding skills that impact successful breast-feeding. In addition to this, Maria is also passionate about targeting feeding skills with table foods as soon as baby is demonstrating readiness skills in order to be successful and result in less stressful mealtimes in early toddlerhood. <br/> <br/>
            Maria is a mother to two boys, both of whom struggled with early feeding difficulty with breastfeeding. Navigating through oral ties, body tension as well as resources of lactation, breastfeeding medicine and release providers were key to success to continue breastfeeding beyond the first year. <br/> <br/>
            Maria has training in the SOS (Sequential Oral Sensory) approach to feeding. Maria has been a Certified Lactation Counselor for 8 years and is certified in TBML, Therapeutic Breast Massage in Lactation.<br/> <br/>
            Maria has training in tongue tie assessment using the ATLFF, Assessment Tool for Lingual Frenulum Function, via the Hazelbaker Institute.<br/> <br/>
            Additional methods and modalities used: Myofascial release, Trigger-point release, Kinesiotaping, and Infant Massage.
          </p>
        </div>

        {/* Right column for image */}
        <div className="col-lg-5 align-items-center">
        <img src="images/MariaWP.png" alt="maria" style={{ maxWidth: '70%', border: '2px solid', borderRadius: '3%', marginTop:'10%', marginLeft: '10%',marginBottom: '20%' }} /> 
        </div>
      </div>
    </div>
</div>  
  
  );
}