import './Contact.css'

const Contact = () => {

    return (
        <section id="contact">
            <h1>CONTACT</h1>
            <div className="contact-content">
                <form action="" method="POST">
                    <div className="contact-fields-content">
                        <div className="contact-fields-user">
                            <div>
                                <label htmlFor="name">Name*</label>
                                <input className="input-form" id="name" type="text" name="name" placeholder="Enter your name" required="required" />
                                <p id="visible-name"></p> 
                            </div>
                            <div>
                                <label htmlFor="mail">Email*</label>
                                <input className="input-form" id="mail" type="email" name="mail" placeholder="Your email address here" required="required" /> 
                                <p id="visible-mail"></p>      
                            </div>
                            <div>
                                <label htmlFor="phone">Phone number</label>
                                <input className="input-form" id="phone" type="text" name="phone" placeholder="Enter your phone number" />
                            </div>
                        </div>

                        <div className="contact-fields-message">
                            <label htmlFor="message-box">Your Message* <span className="char-count">(Maximum 150 characters)</span></label>
                            <textarea cols="40" placeholder="Your message goes here" required="required" minLength="1"></textarea>
                        </div>
                    </div>

                    <div className="contact-footer">
                        <p>
                            The fields marked with a (*) are required.
                        </p>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact