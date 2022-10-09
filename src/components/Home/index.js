import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logoface from '../../static/images/logo.png'
import AnimationLetters from '../animationLetters'
import Logo from './logo'
import './index.scss'

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['R', 'a', 'z', 'e', 'e', 'n', 'a']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 
    'e', 'r', ' ', '|', ' ', 'a', 'n', 'd', 'r', 'o', 'i', 'd', ' ', 'a', 
    'p', 'p', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.',]

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, {})

    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    <span className={`${ letterClass } _0`}>H</span>
                    <span className={`${ letterClass } _1`}>i, </span>
                    <br />
                    <span className={`${ letterClass } _2`}>I</span>
                    <span className={`${ letterClass } _3`}>'m</span>
                    <span className={`${ letterClass } _4`}> </span>
                    <AnimationLetters letterClass={ letterClass }
                    strArray= { nameArray }
                    idx={ 5 } />
                    <br />
                    <AnimationLetters letterClass={ letterClass } 
                    strArray={ jobArray }
                    idx={ 12 }/>
                </h1>
                <h2>
                    Full Stack Python Developer | Android Java Developer. 
                </h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>

            <div className='logoR' ><Logo /></div>

        </div>
    )
}

export default Home