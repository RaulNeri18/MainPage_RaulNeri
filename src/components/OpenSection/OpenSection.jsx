//import Typewriter from "../Typewriter/Typewriter"
import './OpenSection.css'
import { Typewriter } from 'react-simple-typewriter'

const OpenSection = () => {
    const myLines = ['Fullstack', 'Developer', 'Fullstack Developer!'];

    return (
        <div id="opening_section">
            <div className="row">
                <div className="quarter highlight"></div>
                <div className="quarter"></div>
            </div>
            <div className="row">
                <div className="quarter"></div>
                <div className="quarter highlight"></div>
            </div>
            <div className="personal-card">
                <h1 className="brand">Hi 👋, I am Raul</h1>
                <hr/>
                <span className="typewriter-span" >
                    <Typewriter
                        words={myLines}
                        loop={false}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span>
                {/*<Typewriter myLines={myLines} />*/}
            </div>
      </div>
    )
}

export default OpenSection