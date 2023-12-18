import { Link } from "react-router-dom"
import '../styles/HomeStyles/Home.css'

function Home() {
    return (  
        <div className="container">
            <div className="image"></div>
            <div className="about">
                <h1>Hello, I'm David Lim</h1>
                <p>born and raised in Vancouver, I'm a second year  <Link id='school' to='school'>undergraduate student</Link> at the University of British Columbia studying math and computer science.</p>
                <br></br>
                <p>
                    Working towards a career in software engineering and data science, I focus on developing 
                    <Link id='projects' to='projects'> projects </Link>
                    to be practical (and useful) with an intent on developing industry level skills, along with web applications where 
                    I let my artistic background drive my code. 
                </p>
                <br></br>
                <p>interests outside of the tech world include a passion for <Link id='art' to='art'>fine art</Link>, jamming on my guitar, and going for a workout.</p>
                <div className="signature"></div>
            </div>
        </div>
    )
}

export default Home