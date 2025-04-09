import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayouts from './assets/layouts/DefaultLayouts';
//importo componenre per reindirizzare a inizio pagina
import ScrollToTop from "./assets/components/ScrollToTop"

//pagine importate
import HomePage from "./assets/pages/HomePage"
// importo pagina di tutti i prodotti
import ActionFigures from "./assets/pages/ActionFigures"


function App() {

  return (

    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>

          <Route element={<DefaultLayouts />}>
            <Route index path='/' element={<HomePage />} />
            <Route index path='/products' element={<ActionFigures />} />
          </Route>

        </Routes>

      </BrowserRouter >
    </>
  )
}

export default App
