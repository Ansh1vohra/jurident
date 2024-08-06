// src/components/Volunteer.js

import React from 'react';
import "./Volunteer.css";

const Volunteer = () => {
    return (
        <div className="volunteer-page">
            <section className="volunteer-apply py-5">
                <div className="container">
                    <h2 className="text-center mb-4">Apply to Volunteer</h2>
                    <p className="lead text-center mb-4">
                        Join our team of volunteers and make a difference in your community.
                    </p>
                    <form className="volunteer-form">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone Number</label>
                            <input type="tel" className="form-control" id="phone" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="interests" className="form-label">Interests</label>
                            <textarea className="form-control" id="interests" rows="3" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </section>

            <section className="donations py-5 bg-light">
                <div className="container">
                    <h2 className="text-center mb-4">Make a Donation</h2>
                    <p className="lead text-center mb-4">
                        Your donations help us to continue our mission and expand our impact.
                    </p>
                    <div className="text-center">
                        <a href="#donate" className="btn btn-success">Donate Now</a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Volunteer;
