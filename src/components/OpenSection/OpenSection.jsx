import Typewriter from "../Typewriter/Typewriter"
import './OpenSection.css'

const OpenSection = () => {
    const myLines = ["Fullstack Developer."];
    
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
            <Typewriter myLines={myLines} />
            </div>
      </div>
    )
}

export default OpenSection