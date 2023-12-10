import "./ContactUsContactSection.css"

const ContactSection = () => {
    return (
        <>
            <div className="flexing-container-cus">
            <div className="flexing-container-text-cus">
                <p className="flexing-container-text-0-cus">
                    GET IN TOUCH
                </p>
                <p className="flexing-container-text-1-cus">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    We're Happy To<br/> Help You
                </p>
                <p className="flexing-container-text-2-cus">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
            </div>
            <div className="flexing-container-form-container-cus">
                <form action="#" method="post">
            <div className="form-group-cus">
                <input type="text" id="name" name="name" placeholder="Name" required/>
            </div>

            <div className="form-group-cus">
                <input type="text" id="company" name="company" placeholder="Company" required/>
            </div>

            <div className="form-group-cus">
                <input type="tel" id="phone" name="phone" placeholder="Phone Number" required/>
            </div>

            <div className="form-group-cus">
                <input type="email" id="email" name="email" placeholder="Email" required/>
            </div>

            <div className="form-group-cus">
                <input type="text" id="subject" name="subject" placeholder="Subject" required/>
            </div>

            <div className="form-group-cus">
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