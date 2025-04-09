import { Link } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => {
    return (
        <div className="container-footer">
            <div className="container-left-footer">
                <ul>
                    <li>
                        <Link>Chi siamo</Link>
                    </li>
                    <li>
                        <Link>Privacy</Link>
                    </li>
                    <li>
                        <Link>contatti</Link>
                    </li>
                </ul>
            </div>
            <div className="container-right-footer">
                <div>
                    Seguici su:
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-square-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-youtube "></i>

                </div>

            </div>
        </div>
    )
}

export default Footer;