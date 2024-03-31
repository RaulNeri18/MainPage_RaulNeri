import './Portfolio.css'

const Portfolio = () => {

    return (
        <section id="portfolio">
            <h1>PORTFOLIO</h1>
            <div className="portfolio-content">
                <div className="project-card">
                    <img src="https://www.evelinekooijman.com/img/portfolio/moebi_front.jpg"/>
                    <div className="project-info">
                        <h2>E-Commerce</h2>
                        <h3>Ruby on Rails Webshop</h3>
                        <p>With User Authentification, Adminrole,<br />
                            Stripe payments, Mailers, Realtime<br />
                            Comments and Redis.</p>
                        <button>View details »</button>
                    </div>
                </div>

                <div className="project-card">
                    <img src="https://www.evelinekooijman.com/img/portfolio/askalot_front.jpg"/>
                    <div className="project-info">
                        <h2>Realtime Chat</h2>
                        <h3>Ruby on Rails Chat Application</h3>
                        <p>User Authentification, Action Cable<br /> 
                            Realtime messaging, Realtime<br />
                            online-offline toggling with Redis.</p>
                        <button>View details »</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio