import HomeImages from '../components/HomeImages';

const bodyStyling = {
    paddingTop: '20%',
    paddingBottom: '10%'
}



export default function Home() {
    return (
        <main>
            <div className="mainBody bg-light container-fluid" style={bodyStyling}>
                <img src ="./public/images/welcomeImage.svg" className='welcomeImage'/>
                <HomeImages />
            </div>
        </main>
    )
}