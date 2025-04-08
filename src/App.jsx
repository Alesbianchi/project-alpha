import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayouts from './assets/layouts/DefaultLayouts';


//pagine importate
import HomePage from "./assets/pages/HomePage"

function App() {

  return (

    <>
      <BrowserRouter>
        <Routes>

          <Route element={<DefaultLayouts />}>
            <Route index path='/' element={<HomePage />} />
          </Route>

        </Routes>

      </BrowserRouter >
    </>
  )
}

export default App
