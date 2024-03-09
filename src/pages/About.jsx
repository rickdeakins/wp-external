import AboutText from '../components/AboutText';

export default function About() {
  return (
<div className="aboutContainer bg-light container-flex" >
  <div className="aboutBody" >
      <div className="row">
        {/* Left column for text */}
        <div className="aboutText col-lg-7" >
          <h2 class="heading" >About</h2>
          <AboutText />
        </div>

        {/* Right column for image */}
        <div className="col-lg-5 align-items-center">
        <img className="mariaImage" src="images/MariaWP.png" alt="maria" /> 
        </div>
      </div>
    </div>
</div>  
  );
}