import { useState } from 'react'
import './App.css'
import Navbar from './Navbar.jsx'
import Resumo from './Resumo.jsx'
import Contato from './Contato.jsx'
import Projetos from './Projetos.jsx'
import NavbarFim from './NavbarFim.jsx'
import Artigos from './Artigos.jsx'
import Tecnologias from './Tecnologias.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function PaginaPrincipal() {
  return (
    <>
      <Navbar />
      <Resumo />
      <Contato />
      <Projetos />
      <Artigos />
      <Tecnologias />
      <NavbarFim />
    </>
  );
}

function SobreMim() {
  return (
    <>
      <Navbar />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/sobre" element={<SobreMim />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App
