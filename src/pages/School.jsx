import { useEffect } from 'react';
import '../styles/SchoolStyles/School.css'

function School(){
    useEffect(() => {
        const runAnimation = () => {
            const aboutSection = document.querySelector('.bottom');
        
            const lines = aboutSection.querySelectorAll('li');
        
            lines.forEach((line, index) => {
                line.style.animation = `fadeInUp 0.5s ${index * 0.3}s both, blurIn 1s ${index * 0.3}s both`;
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

    return (
        <>
            <div className='container'>
                <div className='top'>
                    <h2>Undergraduate at UBC</h2>
                    <br></br>
                    <h4>combined major in computer science, physics, earth and ocean sciences</h4>
                </div>
                <br></br> 
                <br></br>
                <div className='bottom'>
                    <p>course work ongoing/completed ---></p>
                    <br></br>
                    <ul>
                        <li>CPSC 110: Systematic Program Design (DrRacket, Recursion)</li>
                        <li>CPSC 121: Models of Computation (Logic)</li>
                        <li>CPSC 210: Software Construction (Java)</li>
                        <li>MATH 221: Matrix Algebra</li>
                        <li>DSCI 100: Introduction to Data Science (R)</li>
                        <li>EOSC 211: Computer Methods in Earth, Ocean and Atmospheric Sciences (PYTHON) </li>
                        <li>MATH 102: Differential Calculus with Applications to Life Sciences (Calculus I)</li>
                        <li>MATH 103: Integral Calculus with Applications to Life Sciences (Calculus II)</li>
                        <li>MATH 200: Multivariable Calculus (Calculus III) </li>
                        <li>DES 200: Design Thinking</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default School