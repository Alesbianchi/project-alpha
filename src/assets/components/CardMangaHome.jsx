
const CardMangaHome = () => {

    const scrollCards = (direction) => {
        const container = document.querySelector(".container-manga");
        const scrollAmount = 300;
        if (direction == "left") {
            container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (

        <div className="container-card-figures manga-bg">
            <div className="container-title title-manga">
                <h2>Manga</h2>
                <div className="container-cart">
                    <img src="../img/rubber-cart.png" alt="" />
                </div>
            </div>

            <div className="carousel-nav">

                <button className="arrow left" onClick={() => scrollCards("left")}>&lt;</button>
                <div className="container-card container-manga">
                    <div className="title-card-page">
                        <h3 className="prova">Manga in evidenza</h3>
                        <div>Sempre aggiornati con le ultime uscite.</div>
                    </div>
                    <div className="card-wrapper">
                        <div className="card">
                            <div className="img-card">
                                <img src="../img/mangad.jpg" alt="" />

                                <div className="card-title title-bg">
                                    <div>Monkey D. Rufy - Gear 5</div>
                                    <div>59,99€</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper">
                        <div className="card">
                            <div className="img-card">
                                <img src="../img/mangad2.jpg" alt="" />

                                <div className="card-title title-bg">
                                    <div>Monkey D. Rufy - Gear 5</div>
                                    <div>59,99€</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper">
                        <div className="card">
                            <div className="img-card">
                                <img src="../img/mangad3.jpg" alt="" />

                                <div className="card-title title-bg">
                                    <div>Monkey D. Rufy - Gear 5</div>
                                    <div>59,99€</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper">

                        <div className="card">
                            <div className="img-card">
                                <img src="../img/mangan.jpg" alt="" />

                                <div className="card-title title-bg">
                                    <div>Monkey D. Rufy - Gear 5</div>
                                    <div>59,99€</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper">

                        <div className="card">
                            <div className="img-card">
                                <img src="../img/mangan2.jpg" alt="" />

                                <div className="card-title title-bg">
                                    <div>Monkey D. Rufy - Gear 5</div>
                                    <div>59,99€</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper">

                        <div className="card">
                            <div className="img-card">
                                <img src="../img/mangan3.jpg" alt="" />

                                <div className="card-title title-bg">
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

export default CardMangaHome