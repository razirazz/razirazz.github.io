import { useEffect, useState } from 'react'
import '../Layout/index.scss'
import './index.scss'
import AnimationLetters from '../animationLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, {})

    return (
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimationLetters letterClass={ letterClass }
                    strArray= { ['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e', '!' ]}
                    idx={ 50 } />
                </h1>
                <h2>
                    <form className='cntForm'>
                        <input type='text' placeholder='Name'/><br />
                        <input type='email' placeholder='Email'/><br />
                        <input type='text' placeholder='Subject'/><br />
                        <textarea rows='5' cols='69' placeholder='Message'></textarea><br />
                        <div className='cntButton'>
                            <input type='submit' value='Send'/>
                            <input type='reset' value='Reset'/>
                        </div>
                    </form>
                </h2>
            </div>

            <div className='cnt-zone'>

                <h2>Email</h2>
                <h3>scriptkiddierazz@gmail.com</h3>
                <h2>Phone Number</h2>
                <h3>+91 989** 3*3*4 </h3>
                <h2>Follow me on</h2>
                <h3>
                    <ul>
                        <li>
                            <a href='https://www.linkedin.com/in/razirazz/' target='_blank' rel='noreffer'>
                                <FontAwesomeIcon icon={faLinkedinIn} color='#fff' />
                            </a>
                        </li>

                        <li>
                            <a href='https://github.com/razirazz' target='_blank' rel='noreffer'>
                                <FontAwesomeIcon icon={faGithub} color='#fff' />
                            </a>
                        </li>

                        <li>
                            <a href='https://www.instagram.com/ra_zi_ra_zz/' target='_blank' rel='noreffer'>
                                <FontAwesomeIcon icon={faInstagram} color='#fff' />
                            </a>
                        </li>

                        <li>
                            <a href='https://twitter.com/ra_zi_ra_zz' target='_blank' rel='noreffer'>
                                <FontAwesomeIcon icon={faTwitter} color='#fff' />
                            </a>
                        </li>

                        <li>
                            <a href='https://discord.gg/KZsbxuzW' target='_blank' rel='noreffer'>
                                <FontAwesomeIcon icon={faDiscord} color='#fff' />
                            </a>
                        </li>
                    </ul>
                </h3>
            </div>
        </div>
    )
}

export default Contact