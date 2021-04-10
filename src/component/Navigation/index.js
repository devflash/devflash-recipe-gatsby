import React, {useState} from 'react';
import { Link } from 'gatsby';
import logo from '../../assets/images/logo.svg';
import { FaAlignJustify } from 'react-icons/fa';

const Navigation = () => {
    const [menu, toggleMenu] = useState(false);
    return (
    <nav className="navbar">
        <div className="nav-center">
            <div className="nav-header">
                <img src={logo} alt="Simply receipes"/>
                <button className="nav-btn" onClick={() => toggleMenu(!menu)}>
                    <FaAlignJustify/>
                </button>
            </div>
            <div className={menu ? "nav-links show-links" : "nav-links"}>
                <Link to="/" className="nav-link" activeClassName="active-link">Home</Link>
                <Link to="/recipes" className="nav-link" activeClassName="active-link">Receipes</Link>
                <Link to="/tags" className="nav-link" activeClassName="active-link">tags</Link>
                <Link to="/about" className="nav-link" activeClassName="active-link">about</Link>
                <div className="nav-link contact-link">
                    <Link to="/contact" className="btn">Contact</Link>
                </div>
            </div>
        </div>
    </nav>
)};

export default Navigation;