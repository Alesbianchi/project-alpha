
import { Link } from 'react-scroll';

//importo icone da fontawensome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointer } from '@fortawesome/free-regular-svg-icons'


const HeroImg = () => {
    return (
        <div className="container-hero">
            <div className="buy-now">

                <Link className='link-general' to="section1"><button ><h3><FontAwesomeIcon icon={faHandPointer} flip="vertical" className="pointer-icon" /></h3></button></Link>
            </div>
        </div>
    )
}

export default HeroImg;