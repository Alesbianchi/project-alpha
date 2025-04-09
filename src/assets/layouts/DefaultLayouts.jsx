import { Outlet } from "react-router-dom";

//importo l'header
import Header from "../components/Header"

//importo il footer
import Footer from "../components/Footer"

const DefaultLayouts = () => {
    return (
        <>
            <Header />
            <main className='container'>
                <Outlet />
            </main>
            <Footer />
        </>

    )
}

export default DefaultLayouts;