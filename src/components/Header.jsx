import './Header.css';
import {Link} from 'react-router-dom';

export default function Header(){
    return(
            <nav className="navbar header d-flex justify-content-between align-items-center p-4 bgColor">
                <Link className='Link' to="/">
                    <h3>Logo</h3>
                </Link>
                <div className="List">
                    <Link className='Link' to="/about">About Us</Link>
                    <Link className='Link' to="/projects">Projects</Link>
                    <Link className='Link' to="/events">Events</Link>
                    <Link className='Link' to="/blogs">Blogs/News</Link>
                    <Link className='Link' to="/contactus">Contact Us</Link>
                    <Link className='Link' to="/volunteer">
                        <button className='btn btn-outline-light d-flex gap-2 align-items-center'>
                            Volunteer
                            <i class="fa fa-arrow-right"></i>
                        </button>
                    </Link>
                </div>
            </nav>
    )
}