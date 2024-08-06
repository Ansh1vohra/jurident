import {Link} from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container">
          <div className='m-2'>
            <h5>About Us</h5>
            <p>Our NGO is dedicated to improving the lives of individuals and communities through sustainable development programs.</p>
          </div>
        <div className="d-flex flex-column flex-md-row justify-content-between p-2">
          <div>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white">Home</Link></li>
              <li><Link to="/about" className="text-white">About</Link></li>
              <li><Link to="/projects" className="text-white">Projects</Link></li>
              <li><Link to="/volunteer" className="text-white">Get Involved</Link></li>
              <li><Link to="/contactus" className="text-white">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li><i className="fas fa-map-marker-alt"></i> 123 NGO Street, City, Country</li>
              <li><i className="fas fa-phone"></i> +1 234 567 890</li>
              <li><i className="fas fa-envelope"></i> info@ngo.org</li>
            </ul>
          </div>
          <div>
            <h5>Follow Us</h5>
              <div className="social-links">
                <Link to="/" className="text-white me-2"><i className="fab fa-facebook"></i></Link>
                <Link to="/" className="text-white me-2"><i className="fab fa-twitter"></i></Link>
                <Link to="/" className="text-white me-2"><i className="fab fa-instagram"></i></Link>
                <Link to="/" className="text-white me-2"><i className="fab fa-linkedin"></i></Link>
              </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="mb-0">&copy; {new Date().getFullYear()} NGO Name. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
