import { useEffect } from 'react';
import { Link } from "react-router-dom";
import '../styles/HomeStyles/Home.css';
import resume from './davidlim-resume-jan24.pdf'

function Home() {
    useEffect(() => {
        const runAnimation = () => {
            const aboutSection = document.querySelector('.about');
            const mainAnimation = aboutSection.querySelectorAll('p, h1, .signature');
            mainAnimation.forEach((line, index) => {
                line.style.animation = `fadeInUp 0.5s ${index * 0.3}s both, blurIn 0.7s ${index * 0.3}s both`;
            });
            aboutSection.style.opacity = 1;
        };

        // Ensure the DOM is fully loaded before running the animation
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', runAnimation);
        } else {
            runAnimation();
        }
    }, []);
    
    return (  
        <div className="container">
            <div className="image"></div>
            <div className="about">
                <h1>Hello, I'm David Lim</h1>
                <p>
                    born and raised in Vancouver, I'm a second year  <Link id='school' to='school'>undergraduate student </Link> 
                    at the University of British Columbia studying computer science and physics.
                </p>
                <br />
                <p>
                    working towards a career in software engineering and data science, I focus on developing 
                    <Link id='projects' to='projects'> projects </Link>
                    to be practical (and useful) including a variety of web applications where I let creativity drive my code. 
                </p>
                <br />
                <p>
                    interests outside of the tech world include a passion for <Link id='art' to='art'>fine art</Link>, going for a workout
                    and playing the guitar (or pretty much anything else that involves music).
                </p>
                <br />
                <Link to={resume} className="resume-link" target="_blank" rel="noopener noreferrer">
                    &lt; resume &gt;    
                </Link>

                {/* <div className="signature"></div> */}
            </div>
        </div>
    )
}

export default Home