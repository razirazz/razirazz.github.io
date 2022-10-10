import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from '../../static/images/logo.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faGithub, faInstagram, faLinkedinIn, faSlack, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Twirl as Hamburger } from 'hamburger-react';
import { useState } from 'react';

const sideBar = () => (

    <div className='nav-bar'>
        <Link className='logo' to='/'>
            {/* <img src={LogoS} alt="logo" /> */}
            Razz
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to='/'>
                <FontAwesomeIcon icon={faHome} color="#4D4D4E" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className='about-link' to='/about'>
                <FontAwesomeIcon icon={faUser} color="#4D4D4E" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className='contact-link' to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color="#4D4D4E" />
            </NavLink>
        </nav>

        <ul>

            <li>
                <a href='https://www.linkedin.com/in/razirazz/' target='_blank' rel='noreffer'>
                    <FontAwesomeIcon icon={faLinkedinIn} color='#4D4D4E' />
                </a>
            </li>

            <li>
                <a href='https://github.com/razirazz' target='_blank' rel='noreffer'>
                    <FontAwesomeIcon icon={faGithub} color='#4D4D4E' />
                </a>
            </li>

            <li>
                <a href='https://www.instagram.com/ra_zi_ra_zz/' target='_blank' rel='noreffer'>
                    <FontAwesomeIcon icon={faInstagram} color='#4D4D4E' />
                </a>
            </li>

            <li>
                <a href='https://twitter.com/ra_zi_ra_zz' target='_blank' rel='noreffer'>
                    <FontAwesomeIcon icon={faTwitter} color='#4D4D4E' />
                </a>
            </li>

            <li>
                <a href='https://discord.gg/KZsbxuzW' target='_blank' rel='noreffer'>
                    <FontAwesomeIcon icon={faDiscord} color='#4D4D4E' />
                </a>
            </li>

        </ul>

        <div className='menu-toggle'>
            <Hamburger 
                size={20} 
                duration={0.6} 
                distance="md" 
                color='#ffd700'
                rounded

            />
        </div>

    </div>
)

export default sideBar