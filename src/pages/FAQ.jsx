import FAQText from '../components/FAQText';

const headingStyle= {
  color:'#009999', 
  textAlign: 'left'
}

const bodyStyle = {
 margin: '10%',
}
export default function FAQ() {
      return (
    //     <div className="bg-light container-fluid align-items-center text-center" style={{ marginTop: '10%' }}>
    //     <div className="row" style={bodyStyle}>
    //         <div className="d-flex flex-column justify-content-center align-items-center mb-5">
    //             {/* Content for the first flex box */}
    //             <h2 className="heading" style={headingStyle}>FAQ</h2><br/>
    //             <FAQText />
    //         </div>
    //     </div>  
    //         </div> 
    //   );
    // } 


<div className="bg-light container-fluid d-flex justify-content-center align-items-center" style={{ marginTop: '15%' }}>
  <div className="body" style={bodyStyle}>
      <div className="row">
        {/* Left column for text */}
        <div className="col-lg-10 text-left">
          <h2 class="heading" style={headingStyle}>FAQ</h2>
          <FAQText />
        </div>
      </div>
    </div>
</div>  
  
  );
}