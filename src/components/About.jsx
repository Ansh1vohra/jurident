import './About.css';
import ok from '../Images/meetTeamBg.png'

export default function About(){
    return(
        <div className="about-page">
        {/* <h2>About Us</h2> */}
        <section className="history bg-light py-5">
            <div className="container">
            <h2 className="text-center mb-4">Our History</h2>
            <p className="lead text-center">
                Our NGO was founded in [Year] with the mission to empower individuals and communities to improve their quality of life through sustainable development programs.
            </p>
            </div>
        </section>

        <section className="mission bg-white py-5">
            <div className="container">
            <h2 className="text-center mb-4">Our Mission</h2>
            <p className="lead text-center">
                Our mission is to foster sustainable development by implementing programs that address the core issues affecting our communities, including education, health, and economic empowerment.
            </p>
            </div>
        </section>

        <section className="team bg-light py-5">
            <div className="container">
                <div className='d-flex flex-column flex-md-row justify-content-center align-items-center m-2 mb-4'>
                    <div>
                        <h2 className="text-center mb-4">Meet Our Team</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa error esse inventore commodi provident quasi repellat vero soluta neque laudantium! Voluptatem eius quos qui ullam cum voluptatum magnam aperiam neque.</p>
                    </div>
                    <img src={ok} alt=".." width='400px' />
                </div>
            <div className="row">
                <div className="col-md-4 mb-4">
                <div className="card team-member">
                    <img src="https://cdn-icons-png.flaticon.com/512/5231/5231019.png" className="card-img-top" alt="Team Member 1"/>
                    <div className="card-body text-center">
                    <h5 className="card-title">Person 1</h5>
                    <p className="card-text">Founder & CEO</p>
                    </div>
                </div>
                </div>
                <div className="col-md-4 mb-4">
                <div className="card team-member">
                    <img src="https://cdn-icons-png.flaticon.com/512/5231/5231019.png" className="card-img-top" alt="Team Member 2"/>
                    <div className="card-body text-center">
                    <h5 className="card-title">Person 2</h5>
                    <p className="card-text">Chief Operations Officer</p>
                    </div>
                </div>
                </div>
                <div className="col-md-4 mb-4">
                <div className="card team-member">
                    <img src="https://cdn-icons-png.flaticon.com/512/5231/5231019.png" className="card-img-top" alt="Team Member 3"/>
                    <div className="card-body text-center">
                    <h5 className="card-title">Person 3</h5>
                    <p className="card-text">Program Director</p>
                    </div>
                </div>
                </div>
                <div className="col-md-4 mb-4">
                <div className="card team-member">
                    <img src="https://cdn-icons-png.flaticon.com/512/5231/5231019.png" className="card-img-top" alt="Team Member 3"/>
                    <div className="card-body text-center">
                    <h5 className="card-title">Person 4</h5>
                    <p className="card-text">Program Director</p>
                    </div>
                </div>
                </div>
                <div className="col-md-4 mb-4">
                <div className="card team-member">
                    <img src="https://cdn-icons-png.flaticon.com/512/5231/5231019.png" className="card-img-top" alt="Team Member 3"/>
                    <div className="card-body text-center">
                    <h5 className="card-title">Person 5</h5>
                    <p className="card-text">Program Director</p>
                    </div>
                </div>
                </div>
                <div className="col-md-4 mb-4">
                <div className="card team-member">
                    <img src="https://cdn-icons-png.flaticon.com/512/5231/5231019.png" className="card-img-top" alt="Team Member 3"/>
                    <div className="card-body text-center">
                    <h5 className="card-title">person 6</h5>
                    <p className="card-text">Program Director</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        </div>
    )
}