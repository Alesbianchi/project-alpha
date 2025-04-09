//importo il componente hero
import HeroImg from "../components/HeroImg"
//importo il componente di card action figures
import CardFiguresHome from "../components/CardFiguresHome"
// importo il componente di card manga
import CardMangaHome from "../components/CardMangaHome"
//importo il componente carte collezionabili
import TradingCardHome from "../components/TradingCardHome"


const HomePage = () => {
    return (
        <>
            <main>
                <section id="section0">
                    <HeroImg />
                </section>

                <div className="container-main">
                    <section id="section1">
                        <CardFiguresHome />
                    </section>
                    <section id="section2">
                        <CardMangaHome />
                    </section>
                    <section id="section3">
                        <TradingCardHome />
                    </section>

                </div>



            </main>
        </>

    )
}

export default HomePage;