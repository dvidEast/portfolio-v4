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
                    <a><FontAwesomeIcon icon={faEnvelope}  /></a> {/* email */}
                    <a><FontAwesomeIcon icon={faLinkedin}  /></a> {/* linkedin */}
                    <a><FontAwesomeIcon icon={faInstagram}  /></a> {/* instagram */}
                    <a><FontAwesomeIcon icon={faFacebook}  /></a> {/* facebook */}
                    <a><FontAwesomeIcon icon={faGithub}  /></a> {/* github */}
                </div>
            </div>
        </>
    )
} 

export default Nav