import './Header.css';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Header(){
    const navigate = useNavigate();
    function handleNavigation(location){
        navigate(location);
    }
    return(
            <nav className="navbar header d-flex justify-content-between align-items-center p-4 bgColor">
                <Link className='Link' to="/">
                    <h3>Logo</h3>
                </Link>
                <div className="List">
                    <Link className='Link' to="/projects">Projects</Link>
                    <Link className='Link' to="/events">Events</Link>
                    <Link className='Link' to="/blogs">Blogs/News</Link>
                    <Link className='Link' to="/contactus">Contact Us</Link>
                    <Link className='Link' to="/about">About Us</Link>
                    <Link className='Link' to="/volunteer">
                        <button className='btn btn-outline-light d-flex gap-2 align-items-center'>
                            Volunteer
                            <i className="fa fa-arrow-right"></i>
                        </button>
                    </Link>
                </div>
                    <button className="navbar-toggler text-white" data-bs-theme="dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <span className='navbar-toggler-icon'></span>
                    </button>

                <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">Welcome!</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <Link className='offcanvas-link' to="/about" onClick={() => handleNavigation('/about')} data-bs-dismiss="offcanvas">About Us</Link>
                    <Link className='offcanvas-link' to="/projects" onClick={() => handleNavigation('/projects')} data-bs-dismiss="offcanvas">Projects</Link>
                    <Link className='offcanvas-link' to="/events" onClick={() => handleNavigation('/events')} data-bs-dismiss="offcanvas">Events</Link>
                    <Link className='offcanvas-link' to="/blogs" onClick={() => handleNavigation('/blogs')} data-bs-dismiss="offcanvas">Blogs/News</Link>
                    <Link className='offcanvas-link' to="/contactus" onClick={() => handleNavigation('/contactus')} data-bs-dismiss="offcanvas">Contact Us</Link>
                    <Link className='offcanvas-link' to="/volunteer" onClick={() => handleNavigation('/volunteer')} data-bs-dismiss="offcanvas">
                        <button className='btn btn-outline-dark d-flex gap-2 align-items-center'>
                            Volunteer
                            <i className="fa fa-arrow-right"></i>
                        </button>
                    </Link>
                </div>
                </div>
            </nav>
    )
}