import Typewriter from "../Typewriter/Typewriter"

const OpenSection = () => {
    const myLines = ["UX Engineer.", "UI Designer.", "Frontend Developer."];
    
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