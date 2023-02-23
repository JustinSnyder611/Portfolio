import project1 from '../components/WikiTube.png';
import project2 from '../components/ProjectTracker.png';
import project3 from '../components/GamingGods.png';

const Portfolio = () => {
    return (
        <div>
            <h2>My Portfolio</h2>
            <div class='project'>
                <h3>WikiTube</h3>
                <p>This is a project allows you to look up a youtuber and get their latest video alongside the most recent youtube video.</p>
                <div><a href='https://github.com/JustinSnyder611/WikiTube' target='blank'>Link to Project 1</a></div>
                <img src={project1} alt='project 1'></img>
            </div>
            <div class='project'>
                <h3>Project Tracker</h3>
                <p>The Progress Tracker is an application that simplifies project management. With a clear understanding of who's working on what, you're able to carry out your plan more effectively, which leads to more productivity.</p>
                <div><a href='https://github.com/JustinSnyder611/Project-Tracker' target='blank'>Link to Project 2</a></div>
                <img src={project2} alt='project 2'></img>
            </div>
            <div class='project'>
                <h3>Gaming Gods</h3>
                <p>The Gaming Gods application is a ecommerce website designed to allow users to buy video games online and share their purchased games with friends through their profile.</p>
                <div><a href='https://github.com/JustinSnyder611/Gaming-Company' target='blank'>Link to Project 3</a></div>
                <img src={project3} alt='project 3'></img>
            </div>
        </div>
    );
};

export default Portfolio;