import './index.scss'
import '../Layout/index.scss'
import AnimationLetter from '../animationLetters'
import { useEffect, useState } from 'react'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, {})

    return (

        <div className = 'container about-page' > 
	        <div className = 'text-zone' >
                <h1>
                    <AnimationLetter letterClass = { letterClass }
                        strArray = {['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                        idx = { 50 }
                    />  
                </h1 > 
                <p> I am Razeena from Malappuram.I am currently pursuing my PG programme in Computer Science with specialization in
                    Artificial Intelligence from Kerala University Department. 
                </p> 
                <p> I am quietly confident, natuarally curious, and perceptually working on improving my coding skill. 
                    Started from basic web development(html and css), I have experienced in Python, flask, kotlin and 
                    currently learning and developing mern stack to describe myself as a mern stack developer. 
                </p> 
                <p > If I need to defone myself in one sentence that would be a family person,
                    enthusiast, and a tech - obsessed!!!
                </p> 
                <h2> Skills </h2> 
                <ul>
                    <li> HTML </li> 
                    <li> CSS </li> 
                    <li> JavaScript </li> 
                    <li> Tailwind CSS </li> 
                    <li> SCSS </li>  
                    <li> React </li>  
                    <li> Python </li> 
                    <li> Flask </li> 
                    <li> MySQL </li> 
                </ul> 
            </div>

            <div className = 'education' >
                <div className="timeline">
                    <div className="timeline-items">
                        <div className="timeline-item active">
                            <div className="timeline-content">
                                <h4>2017 - 2019<br />
                                Higher Secondary Education</h4>
                                <p>Completed Higher Secondary Education with Mathematics, Physics and Computer Science</p>
                            </div>
                        </div>
                        <div className="timeline-item active">
                            <div className="timeline-content">
                                <h4>2019 - 2022<br />
                                Bachelor Degeree</h4>
                                <p>Completed Bachelor degree in Computer Science from LBS MDC under Calicut University</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-content">
                                <h4>2022 - present<br />
                                Master's degree</h4>
                                <p>Currently pursuing Master's degree in Computer Science with Specialization in Artificial Intelligence from Kerala University Campus</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default About