import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';

const headingStyle= {
  textAlign: 'center',
  color:'#495057', 

}


const bodyStyle = {
  margin: "0 25%",
  textAlign: "center",
  border: '2px',
  borderRadius: '3%',
  backgroundColor: '#fffcf9',
  boxShadow: '2px 2px 4px rgba(1, 1, 1, 0.5)',
  padding: '10px' 
}

export default function Contact() {
    return (
      <div className="ContactContainer bg-light container-fluid">
        <div className="ContactBody align-items-center" >
          <h2 class="heading" style={headingStyle}>Contact</h2>
        <ContactInfo />  
        <ContactForm />
        </div>    
      </div> 
    );
  }