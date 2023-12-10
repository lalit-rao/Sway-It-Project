import "./ContactSection.css"

const ContactSection = () => {
    return (
        <>
            <div className="flexing-container-cs">
            <div className="flexing-container-text-cs">
                <p className="flexing-container-text-1-cs">
                    Interested in<br/> supporting our<br/> talents?
                </p>
                <p className="flexing-container-text-2-cs">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
            </div>
            <div className="flexing-container-form-container-cs">
                <form action="#" method="post">
            <div className="form-group">
                <input type="text" id="name" name="name" placeholder="Name" required/>
            </div>

            <div className="form-group">
                <input type="text" id="company" name="company" placeholder="Company" required/>
            </div>

            <div className="form-group">
                <input type="tel" id="phone" name="phone" placeholder="Phone Number" required/>
            </div>

            <div className="form-group">
                <input type="email" id="email" name="email" placeholder="Email" required/>
            </div>

            <div className="form-group">
                <input type="text" id="subject" name="subject" placeholder="Subject" required/>
            </div>

            <div className="form-group">
                <textarea id="message" name="message" placeholder="Message" rows="7" required></textarea>
            </div>

            <div className="button-blog-cus">
                    <p className="button-text-cus">
                        Send Message
                    </p>
            </div>
        </form>
            </div>
        </div>
        </>
    );
};

export default ContactSection;