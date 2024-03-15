import HomeImages from '../components/HomeImages';

export default function Home() {
    return (
        <main>
            <div className="mainBody bg-light container-fluid" >
                <img src ="./public/images/welcomeImage.svg" className='welcomeImage'/>
                <HomeImages />
            </div>
        </main>
    )
}