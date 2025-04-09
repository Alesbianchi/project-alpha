import { Link } from 'react-router-dom'


const HeroProduct = () => {
    return (
        <div className="container-hero product-page">
            <div className="buy-now">
                <button ><Link className='link-general' to="/"><h3>Torna alla home</h3></Link></button>

            </div>
        </div>
    )
}

export default HeroProduct;