import myResume from '../components/resume.png';

const Resume = () => {
    return (
        <div>
            <h2>My Resume</h2>
            <img id='resumeImg' src={myResume} alt="My Resume"></img>
            <div id='resumeLink'><a href='https://docs.google.com/document/d/1KM5Ue2ZYKEfjxtLREFxsDxi7uSHla8h1L2KmB5EyqVg/edit?usp=sharing'>Link to Resume</a></div>
        </div>
    );
};

export default Resume;