import "../styles/navbar.css";


const navList = ["Home", "Skills", "Projects", "Experience", "Contact"];

const Navbar = () => {

    return (
        <div className="nav-bar-container">
            <div className="nav-list-container">
                {navList.map((item, index) => {
                    const id = item.toLowerCase();
                    return (
                        <a key={index} href={`#${id}`} className="nav-link">{item}</a>)
                })}
            </div>
        </div>
    )
}

export default Navbar;