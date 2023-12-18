import { useEffect } from 'react'
import '../styles/ProjectsStyles/Projects.css'

function Projects(){
    useEffect(() => {
        const runAnimation = () => {
            const aboutSection = document.querySelector('.bottom');
        
            const lines = aboutSection.querySelectorAll('ul');
        
            lines.forEach((line, index) => {
                line.style.animation = `fadeInUp 0.3s ${index * 0.3}s both, blurIn 1s ${index * 0.3}s both`;
            });
        
            // Show the section after applying animations
            aboutSection.style.opacity = 1;
        };
    
        // Ensure the DOM is fully loaded before running the animation
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', runAnimation);
        } else {
            runAnimation();
        }
    }, []);

    return(
        <>
            <div className="container">
                <div className="top">
                    <h2>projects</h2>
                    <br></br>
                    <h4>a hub for all my personal projects</h4>
                </div>
                <br></br>
                <div className="bottom">
                    <ul>
                        <li className="project-title">statside (new version in development) w/ typscript, html, css --&gt; <a href='https://github.com/dvidEast/statside'>github</a></li>
                        <li className="project-summary">- web app implementing data analyses for hockey players in the NHL</li>
                        <li className="project-summary">- fetched the NHL API endpoint to access statistical stats for every active NHL player in an NHL roster</li>
                        <li className="project-summary">- wrangling the data to create insightful (and predictive) visualizations</li>
                        <li className="project-summary">- ideated, designed, and implemented a user interface</li>
                    </ul>
                    
                    <br></br>

                    <ul>
                        <li className="project-title">self driving car w/ js, html, css --&gt; <a href='https://github.com/dvidEast/self-driving-car-js'>github</a></li>
                        <li className="project-summary">- implemented a digital, self driving car</li>
                        <li className="project-summary">-  utilizing a neural network and “sensors” to detect appropriate driving paths through supervised learning techniques</li>
                    </ul> 

                    <br></br>

                    <ul>
                        <li className="project-title">clueless (Biztech HelloHacks Hackathon) w/ java, figma --&gt; <a href='https://github.com/dvidEast/clueless-hellohacks'>github</a> <a href='https://www.figma.com/file/HxdLtIxMJoTRCpONHCNDqi/Clueless?type=design&node-id=6%3A20&mode=design&t=fy0PSA28aV7EfagL-1'>figma</a></li>
                        <li className="project-summary">- competed in a beginner hackathon with an emphasis on the bridge between business and technology</li>
                        <li className="project-summary">- mentored by industry professionals from the likes AWS, creating a business proposal for a mobile app using Figma and Java</li>
                    </ul>

                    <br></br>

                    <ul>
                        <li className="project-title">sauce the aux w/ java --&gt; <a href='https://github.com/dvidEast/SauceTheAux'>github</a></li>
                        <li className="project-summary">- developed an app that allows users to create a playlist through an  integrated genre system, allowing you to customize how you want your next playlist to sound</li>
                        <li className="project-summary">-  utilized OOP techniques including abstraction, polymorphism, encapsulation and inheritance along with exhaustive testing</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Projects