import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className="contact-page">
            <div className="container py-5">
                <h2 className="text-center mb-4">Contact Us</h2>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <h5>Contact Information</h5>
                        <p><strong>Address:</strong> 123 NGO Street, City, Country</p>
                        <p><strong>Phone:</strong> (123) 456-7890</p>
                        <p><strong>Email:</strong> contact@ngo.org</p>
                        <div className="map-container">
                            <iframe
                                title="NGO Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.895180400473!2d-122.08424968469185!3d37.42199997982561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5e8b1dfd3b1%3A0x5158b1c8d6e82fd!2sGoogleplex!5e0!3m2!1sen!2sus!4v1606252506905!5m2!1sen!2sus"
                                width="100%"
                                height="300"
                                frameBorder="0"
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex="0"
                            ></iframe>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h5>Contact Form</h5>
                        <form>
                            <div className="form-group mb-3">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" id="name" required />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" required />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="message">Message</label>
                                <textarea className="form-control" id="message" rows="5" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
