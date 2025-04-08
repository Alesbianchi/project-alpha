//importo il componente hero
import HeroImg from "../components/HeroImg"
//importo il componente di card action figures
import CardFiguresHome from "../components/CardFiguresHome"
// importo il componente di card manga
import CardMangaHome from "../components/CardMangaHome"


const HomePage = () => {
    return (
        <>
            <main>
                <HeroImg />
                <div className="container-main">
                    <section id="section1">
                        <CardFiguresHome />
                    </section>
                    <section id="section2">
                        <CardMangaHome />
                    </section>

                </div>



            </main>
        </>

    )
}

export default HomePage;