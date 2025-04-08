import { Link } from 'react-scroll';


const Header = () => {
    return (
        <div className="main-header">
            <div className="logo">
                <img src="./img/logo.png" alt="" />

            </div>
            <div className="nav-bar">
                <ul>
                    <li><Link to="section1" smooth={true} duration={500}>ActionFigures</Link></li>
                    <li><Link to="section2" smooth={true} duration={500}>Manga</Link></li>
                    <li><Link to="section3">Usato</Link></li>
                    <li><Link to="section4">Carte</Link></li>
                </ul>

            </div>
        </div>

    )
}

export default Header;