import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <img className='sub-logo' src={LogoSubtitle} alt="slobodan" /> 
        </Link>
        <nav>
            {/* buttons on the side of the nav bar */}
            <NavLink 
            exact='true' 
            activeclassname='active' 
            to='/'
            >
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' /> 
            </NavLink>
            <NavLink 
            exact='true' 
            activeclassname='active' 
            className='about-link' 
            to='/about'
            >
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' /> 
            </NavLink>
            <NavLink 
            exact='true' 
            activeclassname='active' 
            className='contact-link' 
            to='/contact'
            >
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' /> 
            </NavLink>
        </nav>

        <ul>
            {/* icons to get you to social media pages */}
            <li>
                <a 
                target="_blank" 
                rel="noreferrer" 
                href="https://www.linkedin.com/in/yussel-panecatl-b21ab4188/"
                >
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                </a>
            </li>

            <li>
                <a 
                target="_blank" 
                rel="noreferrer" 
                href="https://www.github.com/panecatl"
                >
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                </a>
            </li>

            <li>
                <a 
                target="_blank" 
                rel="noreferrer" 
                href="/"
                >
                    <FontAwesomeIcon icon={faInstagram} color='#4d4d4e' />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar 