import './css/App.css'
import './css/Animations.css'
import Navbar from './components/Navbar.jsx'
import Resumo from './components/Resumo.jsx'
import Contato from './components/Contato.jsx'
import Projetos from './components/Projetos.jsx'
import NavbarFim from './components/NavbarFim.jsx'
import Artigos from './components/Artigos.jsx'
import Tecnologias from './components/Tecnologias.jsx'
import MeuBlog from './pages/MeuBlog.jsx'
import ScrollTop from './components/ScrollTop.jsx';
import Trajetoria from './pages/Trajetoria.jsx';
import ProblemasJS from './pages/ProblemasJS.jsx';
import Pagina404 from './pages/Pagina404.jsx';
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";

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

function Problemas() {
  return (
    <>
      <Navbar />
      <ProblemasJS />
    </>
  );
}

function App() {
  return (
    <HashRouter>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/trajetoria" element={<Sobre />} />
        <Route path="/problemasJS" element={<Problemas />} />
        <Route path="*" element={<Pagina404 />} />
      </Routes>
    </HashRouter>
  );
}
export default App
