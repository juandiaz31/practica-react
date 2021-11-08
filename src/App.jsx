import "./App.css";
import Index from "./pages/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./pages/Test";
import Configuracion from "./pages/Configuracion";
import { DarkContext } from "./context/dark";
import React, { useState } from "react";

function App() {
  const [dark, setDark] = useState(false);
  return (
    <DarkContext.Provider value={{ dark, setDark }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/test" element={<Test />} />
          <Route path="/configuracion" element={<Configuracion />} />
        </Routes>
      </BrowserRouter>
    </DarkContext.Provider>
  );
}

export default App;
