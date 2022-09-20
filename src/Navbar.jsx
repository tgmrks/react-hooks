import { Link } from 'react-router-dom';
import styles from './navbar.css'

function Navbar() {
    return (
        <>
            <ul className='nav-list'>
                <li className='nav-item'>
                    <Link to="/">Home</Link>
                </li>
                <li className='nav-item'>
                    <Link to="/company">Company</Link>
                </li>
                <li className='nav-item'>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </>
    );
}
export default Navbar;