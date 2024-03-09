import HomeImages from '../components/HomeImages';

const bodyStyling = {
    paddingTop: '20%',
    paddingBottom: '10%'
}

const welcomeImage = {
    maxWidth: '50%'
}

export default function Home() {
    return (
        <main>
            <div className="mainBody bg-light container-fluid" style={bodyStyling}>
                <img src ="./public/images/welcomeImage.svg" style ={welcomeImage}/>
                <HomeImages />
            </div>
        </main>
    )
}