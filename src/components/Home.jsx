
import "../styles/home.css";
import image from "../images/image.png";

const Home = () => {
    return (
        <div id="home" className="home-container">
            <div className="introduction">
                <div className="profile-container">
                    <img className="profile-picture" src={image} alt="profile" />
                </div>
                <div>
                    <h1>Hi, I'm Saloni Sharma</h1>
                    <h2>(Front - End Developer)</h2>
                </div>
            </div>

            {/* Next Line */}
            <div className="about-text">
                <h1>I'm a Software Engineer</h1>
                <p>Currently, I am a software engineer at Tata Consultancy Services</p>

                <p>My experience mainly involves building and maintaining responsive web apps using React, Redux, and JavaScript</p>
                <p>
                    Recent work includes building complex UI flows, improving load performance, and writing unit/integration tests.
                    I'm always learning new tools and best practices to improve user experience and developer productivity.
                </p>
            </div>
        </div>
    );
}

export default Home;