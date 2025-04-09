import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className="main-header">
            <div className="logo">
                <Link to="/"><img src="./img/logo.png" alt="" /></Link>

            </div>
            <div className="nav-bar">
                <ul>
                    <li><Link to="/products" smooth={true} duration={500}>ActionFigures</Link></li>
                    <li><Link to="section2" smooth={true} duration={500}>Manga</Link></li>
                    <li><Link to="section3">Carte</Link></li>
                    <li><Link to="section4">Usato</Link></li>
                </ul>

            </div>
        </div>

    )
}

export default Header;