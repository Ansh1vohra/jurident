import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://img.freepik.com/free-photo/people-celebrating-world-population-day_23-2151493191.jpg?size=626&ext=jpg&ga=GA1.1.152313917.1696701547&semt=sph" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://img.freepik.com/free-photo/international-day-education-illustration_23-2151101756.jpg?t=st=1722797481~exp=1722801081~hmac=ec41cafba9148df3a07e3034ef2f9a2fddfab793e547183d7f0add3df788bb73&w=1060" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://img.freepik.com/free-photo/people-celebrating-world-population-day_23-2151493191.jpg?size=626&ext=jpg&ga=GA1.1.152313917.1696701547&semt=sph" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <section className="mission py-5">
        <div className="container text-center">
          <h2 className="mb-4">Our Mission</h2>
          <p className="lead">
            Our mission is to empower individuals and communities to improve their quality of life through sustainable development programs.
          </p>
        </div>
      </section>

      <section className="achievements">
        <div className="container">
          <div className="row">
            <div className="col-md-4 achievement-item">
              <i className="fa fa-user fa-3x mb-3"></i>
              <h3>1,20,000+</h3>
              <p>Volunteers Engaged</p>
            </div>
            <div className="col-md-4 achievement-item">
              <i className="fas fa-hands-helping fa-3x mb-3"></i>
              <h3>17+</h3>
              <p>Voluntary Service</p>
            </div>
            <div className="col-md-4 achievement-item">
              <i className="fas fa-child fa-3x mb-3"></i>
              <h3>37,000+</h3>
              <p>Children and Youth Impacted</p>
            </div>
          </div>
        </div>
      </section>

      <section className="values bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Our Core Values and Achievements</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Integrity</h5>
                  <p className="card-text">We uphold the highest standards of integrity in all our actions.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Impact</h5>
                  <p className="card-text">Our programs have positively impacted thousands of lives.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Sustainability</h5>
                  <p className="card-text">We are committed to sustainable development and environmental stewardship.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
