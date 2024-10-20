import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <h1>Portfo<span>lio</span></h1>
            <ul>
                <li>
                    <NavLink exact to="/" className={({ isActive }) => isActive ? 'link active' : 'link'}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive }) => isActive ? 'link active' : 'link'}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/skill" className={({ isActive }) => isActive ? 'link active' : 'link'}>
                        Skill
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/project" className={({ isActive }) => isActive ? 'link active' : 'link'}>
                        Project
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
