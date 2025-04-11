import { Outlet } from "react-router-dom";

//importo l'header
import Header from "../components/Header"

//importo il footer
import Footer from "../components/Footer"

//importo il chatbot
import Chatbot from "../components/Chatbot";

const DefaultLayouts = () => {
    return (
        <>
            <Header />
            <main className='container'>
                <Outlet />
            </main>
            <Footer />
            <Chatbot />
        </>

    )
}

export default DefaultLayouts;