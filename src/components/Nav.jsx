import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import '../styles/NavStyles/Nav.css'

function Nav () {
    return(
        <>
            <div className='nav-container'>
                <Link className='name-button' to='/'><h1>david <span className='kname1'>동</span><span className='kname2'>건</span> lim</h1></Link>
                <div className='socials-container'>
                    <a href="mailto:https://www.daviddlim11@gmail.com"> <FontAwesomeIcon icon={faEnvelope} /></a>
                    <a href="https://www.linkedin.com/in/daviddlim"><FontAwesomeIcon icon={faLinkedin}  /></a>
                    <a href="https://www.instagram.com/dvidlim/"><FontAwesomeIcon icon={faInstagram}  /></a>
                    <a href="https://www.facebook.com/profile.php?id=100012278444105"><FontAwesomeIcon icon={faFacebook}  /></a>
                    <a href="https://github.com/dvidEast"><FontAwesomeIcon icon={faGithub}  /></a>
                </div>
            </div>
        </>
    )
} 

export default Nav