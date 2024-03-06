import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';

const headingStyle= {
  color:'#009999', 
  textAlign: 'center'
}

const containerStyle = {
  paddingTop: '20%',
  paddingBottom: '10%',
}

const bodyStyle = {
  margin: "0 20%",
  textAlign: "center",
}

export default function Contact() {
    return (
      <div className="bg-light container-fluid" style={containerStyle}>
        <div className="align-items-center" style={bodyStyle}>
          <h2 class="heading" style={headingStyle}>Contact</h2>
        <ContactInfo />  
        <ContactForm />
        </div>    
      </div> 
    );
  }