import FAQText from '../components/FAQText';

export default function FAQ() {
      return (
<div className="FAQ bg-light container-fluid d-flex justify-content-center align-items-center">
  <div className="bodyStyle">
      <div className="row">
        {/* Left column for text */}
        <div className="FAQ Text col-lg-7" >
          <h2 class="heading" >FAQ</h2>
          <FAQText />
        </div>
        {/* Right column for image */}
        <div className="col-lg-6 align-items-center">
        <img className="baby-portrait" src="images/babyportrait.jpeg" alt="babyportrait"/> 
        </div>
      </div>
    </div>
</div>  
  
  );
}