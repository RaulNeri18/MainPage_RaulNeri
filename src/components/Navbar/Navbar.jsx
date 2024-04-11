import './Navbar.css'

const Navbar = () => {

    return (
        <nav className="navbar">
            <div className="nav-content">


                <div className="nav-social-network">
                    <ul>
                    <li><a><span></span></a></li>
                    <li><a><span></span></a></li>
                    </ul>
                </div>
                <div className="nav-menu">
                    <ul>
                    <li><a className="db-line" href="#opening_section">HOME</a></li>
                    <li><a className="db-line" href="#about">ABOUT</a></li>                    
                    <li><a className="db-line" href="#experience">EXPERIENCE</a></li>
                    <li><a className="db-line" href="#portfolio">PORTFOLIO</a></li>
                    <li><a className="db-line" href="#contact">CONTACT</a></li>
                    </ul>
                </div>

                <button type="button" className="navbar-toggle collapsed">
                    <span className="icon-bar top-bar"></span>
                    <span className="icon-bar middle-bar"></span>
                    <span className="icon-bar bottom-bar"></span>                        
                </button>
            </div>
        </nav>
    )
}

export default Navbar