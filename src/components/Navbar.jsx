
import { useState } from "react";
import "../styles/navbar.css";

const navList = ["Home", "Skills", "Experience", "Projects", "Contact"];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="nav-bar-container">
            <div className="nav-header">
                <h2 className="nav-logo">Portfolio</h2>
                <button
                    className={`menu-toggle ${menuOpen ? "open" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </div>

            <div className={`nav-list-container ${menuOpen ? "show" : ""}`}>
                {navList.map((item, index) => {
                    const id = item.toLowerCase();
                    return (
                        <a
                            key={index}
                            href={`#${id}`}
                            className="nav-link"
                            onClick={() => setMenuOpen(false)}
                        >
                            {item}
                        </a>
                    );
                })}
            </div>
        </nav>
    );
};

export default Navbar;
