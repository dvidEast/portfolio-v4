import { Link } from "react-router-dom"
import '../styles/HomeStyles/Home.css'

function Home() {
    return (
        <>  
            <div className='main-container'>
                <p>born and raised in Vancouver, I'm a second year  <Link id='school' to='school'>undergraduate student</Link> at the University of British Columbia studying computer science and physics.</p>
                <br></br>
                <p>As a computer engineer, I specialize in <Link id='projects' to='projects'>front-end development</Link>, utilizing my artistic background and marketing experience to create engaging, and memorable web pages. 
                 Moreover, I am eager to gain experience in back-end development and data science (machine learning with AI).</p>
                <br></br>
                <p>interests outside of the tech world include a passion for <Link id='art' to='art'>fine art</Link>, jamming on my guitar, and going for a workout.</p>
            </div>
        </>
    )
}

export default Home