import FAQText from '../components/FAQText';

export default function FAQ() {
      return (
        <div className="bg-light container-fluid align-items-center text-center" style={{ paddingTop: '170px' }}>
          {/* Heading image */}
        {/* <img src="images/portfolio.svg" alt="greetings" width="50%" className="pb-3"/>  */}
        <div className="row">
          <div className="w-50 mx-auto">
            <div className="d-flex flex-column justify-content-center align-items-center mb-5">
                {/* Content for the first flex box */}
                <h3>FAQ</h3><br/>
                <FAQText />
              </div> 
            </div>
        </div>  
            </div> 
      );
    }