import './css/App.css'
import './css/Animations.css'
import Navbar from './Navbar.jsx'
import Resumo from './Resumo.jsx'
import Contato from './Contato.jsx'
import Projetos from './Projetos.jsx'
import NavbarFim from './NavbarFim.jsx'
import Artigos from './Artigos.jsx'
import Tecnologias from './Tecnologias.jsx'
import SobreMim from './SobreMim.jsx'
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

function MaisSobre() {
  return (
    <>
      <Navbar />
      <SobreMim />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/sobre" element={<MaisSobre />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App
