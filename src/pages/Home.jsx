import HomeImages from '../components/HomeImages';

const bodyStyling = {
    paddingTop: '20%',
    paddingBottom: '10%'
}

const headingStyle= {
    color:'#009999', 
    textAlign: 'center',
  }

const subHeadingStyle = {
    letterSpacing: '1%',
    marginBottom: '2%'
}  

const welcomeImage = {
    maxWidth: '50%'
}

export default function Home() {
    return (
        <main>
            <div className="bg-light container-fluid" style={bodyStyling}>
                {/* <h2 style={headingStyle}>Welcome to Whole Practice Feeding Therapy!</h2><br/>
                <h4 style={subHeadingStyle}>Whole Person, Whole Family Dynamic, Whole Projection to Success</h4>     */}
                <img src ="./public/images/welcomeImage.svg" style ={welcomeImage}/>
                <HomeImages />
            </div>
        </main>
    )
}