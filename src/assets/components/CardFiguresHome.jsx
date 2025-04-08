
const CardFiguresHome = () => {

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

        <div className="container-card-figures figures-bg">
            <div className="container-title">
                <h2>Action-Figures</h2>
                <div className="container-cart">
                    <img src="../img/rubber-cart.png" alt="" />
                </div>

            </div>

            <div className="carousel-nav">

                <button className="arrow left" onClick={() => scrollCards("left")}>&lt;</button>
                <div className="container-card">
                    <div className="title-card-page action-page">
                        <h3 >Action figures in evidenza</h3>
                        <div>Sempre aggiornati con le ultime uscite.</div>
                    </div>
                    <div className="card-wrapper">
                        <div className="card">
                            <div className="img-card">
                                <img src="../img/op7.jpg" alt="" />

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
                                <img src="../img/op8.jpg" alt="" />

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
                                <img src="../img/op4.jpg" alt="" />

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
                                <img src="../img/op5.jpg" alt="" />

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
                                <img src="../img/op6.jpg" alt="" />

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
                                <img src="../img/op9.jpg" alt="" />

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

export default CardFiguresHome;