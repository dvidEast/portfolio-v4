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
                    <p>relevant ongoing course work ---></p>
                    <br></br>
                    <ul>
                        <li>CPSC 221: Data Structures and Algorithms (C++)</li>
                        <li>CPSC 213: Computer Systems (Java)</li>
                        <li>STAT 251: Elementary Statistics (R)</li>
                        <li>MATH 220: Mathematical Proofs</li>
                    </ul>
                    <br></br>
                    <br></br>
                    <p>relevant compeleted course work ---></p>
                    <br></br>
                    <ul>
                        <li>CPSC 210: Software Construction (Java)</li>
                        <li>CPSC 110: Systematic Program Design (DrRacket, Recursion)</li>
                        <li>CPSC 121: Models of Computation (Logic)</li>
                        <li>MATH 221: Matrix Algebra</li>
                        <li>MATH 200: Multivariable Calculus (Calculus III) </li>
                        <li>DSCI 100: Introduction to Data Science (R)</li>
                        <li>EOSC 211: Computer Methods in Earth, Ocean and Atmospheric Sciences (Python) </li>
                    </ul>
                    <br></br>
                    <br></br>
                    <p>some other courses I enjoyed :) ---></p>
                    <br></br>
                    <ul>
                        <li>DES 200: Design Thinking (Architecture and Urban Design)</li>
                        <li>MUSC 103: Music Theory</li>
                        <li>CRWR 230: Writing for Comedic Forms</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default School
