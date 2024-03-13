import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';

export default function Contact() {
    return (
      <div className="ContactContainer bg-light container-fluid">
        <div className="ContactBody align-items-center" >
          <h2 class="headerStyle">Contact</h2>
        <ContactInfo />  
        <ContactForm />
        </div>    
      </div> 
    );
  }