import welcomeImg from '../components/pic1.png';

const Homepage = () => {
    return (
        <div>
            <h2 id="welcomeText">Welcome to my Portfolio!</h2>
            <img id='cssPic' src={welcomeImg} alt='css code'></img>
        </div>
    );
};

export default Homepage;