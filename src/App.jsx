import './css/App.css'
import './css/Animations.css'
import Navbar from './Navbar.jsx'
import Resumo from './Resumo.jsx'
import Contato from './Contato.jsx'
import Projetos from './Projetos.jsx'
import NavbarFim from './NavbarFim.jsx'
import Artigos from './Artigos.jsx'
import Tecnologias from './Tecnologias.jsx'
import MeuBlog from './MeuBlog.jsx'
import ScrollTop from './ScrollTop';
import Trajetoria from './Trajetoria.jsx';
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

function Blog() {
  return (
    <>
      <Navbar />
      <MeuBlog />
      <NavbarFim />
    </>
  );
}

function Sobre() {
  return (
    <>
      <Navbar />
      <Trajetoria />

    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/trajetoria" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App
