import { Link } from 'react-router-dom'

const TradingCardHome = () => {
    const scrollCards = (direction) => {
        const container = document.querySelector(".container-card");
        const scrollAmount = 300;
        if (direction == "left") {
            container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="container-card-figures cards-bg">
            <Link to=''>
                <div className="container-title title-card">
                    <h2>CARDS</h2>
                    <div className="container-cart">
                        <img src="../img/rubber-cart.png" alt="" />
                    </div>

                </div>

            </Link>


            <div className="carousel-nav">

                <button className="arrow left" onClick={() => scrollCards("left")}>&lt;</button>
                <div className="container-card">
                    <div className="title-card-page action-page">
                        <h3 className='prova'>Carte in evidenza</h3>
                        <div className='white-text'>Sempre aggiornati con gli ultimi arrivi.</div>
                    </div>
                    <div className="card-wrapper">
                        <div className="card">
                            <div className="img-card">
                                <img src="../img/pk-card.jpg" alt="" />

                                <div className="card-title">
                                    <div>Monkey D. Rufy - Gear 5</div>
                                    <div>59,99€</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper">
                        <div className="card">
                            <div className="img-card">
                                <img src="../img/ok-card2.jpg" alt="" />

                                <div className="card-title">
                                    <div>Monkey D. Rufy - Gear 5</div>
                                    <div>59,99€</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper">
                        <div className="card">
                            <div className="img-card">
                                <img src="../img/pk-card3.JPG" alt="" />

                                <div className="card-title">
                                    <div>Monkey D. Rufy - Gear 5</div>
                                    <div>59,99€</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper">

                        <div className="card">
                            <div className="img-card">
                                <img src="../img/pk-card4.JPG" alt="" />

                                <div className="card-title">
                                    <div>Monkey D. Rufy - Gear 5</div>
                                    <div>59,99€</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper">

                        <div className="card">
                            <div className="img-card">
                                <img src="../img/op-card.jpg" alt="" />

                                <div className="card-title">
                                    <div>Monkey D. Rufy - Gear 5</div>
                                    <div>59,99€</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper">

                        <div className="card">
                            <div className="img-card">
                                <img src="../img/op-card2.jpg" alt="" />

                                <div className="card-title">
                                    <div>Monkey D. Rufy - Gear 5</div>
                                    <div>59,99€</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="arrow right" onClick={() => scrollCards("right")}>&gt;</button>
            </div>
        </div >
    )
}

export default TradingCardHome;