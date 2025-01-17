import "./Contact.css"

function Contact(){
    return(
        <>
            <section class="contact_section  long_section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form_container">
                                    <div class="heading_container">
                                    <h2>
                                        Contact Us
                                    </h2>
                                    </div>
                                <form action="">
                                    <div>
                                        <input type="text" placeholder="Your Name" />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Phone Number" />
                                    </div>
                                    <div>
                                        <input type="email" placeholder="Email" />
                                    </div>
                                    <div>
                                        <input type="text" class="message-box" placeholder="Message" />
                                    </div>
                                    <div class="btn_box">
                                        <button>
                                        SEND
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;
