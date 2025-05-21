import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import './css/Navbars.css'

function Navbar(){
    const [abrirMenu, setabrirMenu] = useState(false);
    const [mostrarModal,setMostrarModal] = useState(false);
   
    const navigate = useNavigate();
    const location = useLocation();

    const irParaHome = () => {
        if (location.pathname === "/") {
            if (window.scrollY === 0) {
                alert("Você já está na Página Principal.");
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        } else {
            navigate('/');
        }
    };

    const tituloNavbar = location.pathname === '/sobre'
    ? 'Blog'
    : 'Portfólio Dev';

    return (
        <div>
            <nav>
                <div className="navbar-linha">
                    
                    <img alt='Foto do Lens' src="/images/Logo.png" className='logo'></img>
                    <h4 className='fonte-titulos cor'style={{marginLeft:'auto', marginRight:'auto'}}>{tituloNavbar}</h4>
                    <div className='dropdown'>
                        <button onClick={() => setabrirMenu(!abrirMenu)} className='dropbtn fonte-titulos cor'>▼</button>
                        {abrirMenu && (
                            <div className='conteudo-dropdown'>
                                <a onClick={irParaHome}>🏠 Página Principal</a>
                                <a onClick={() => setMostrarModal(true)}>❔ Sobre o Site</a>
                                <a onClick={() => {document.getElementById('scrol-contato').scrollIntoView({ behavior: 'smooth', block: 'center' }); setTimeout(() => {alert("Entre em contato comigo para relatar o problema no site.");}, 350); 
                                }}>⚠️ Relatar Problemas</a>
                            </div>
                        )}
                    </div>
                    
                </div>
            </nav>
            {mostrarModal && (
                <div className='modal-overlay' onClick={() => setMostrarModal(false)}>
                    <div className='modal-conteudo' onClick={e => e.stopPropagation()}>
                        <button id='fechar' onClick={() => setMostrarModal(false)}>X</button>
                        <h2>Sobre o Site</h2>
                        <h4>Este site foi implementado com as seguintes tecnologias:</h4>  
                        <ul className='fonte-texto'>
                            <li><span>Vite</span> como ferramenta de construção e servidor de desenvolvimento;</li>
                            <li><span>React</span> como framework / biblioteca;</li>
                            <li><span>JavaScript + HTML (JSX)</span> e <span>CSS (puro)</span>;</li>
                            <li><span>UIverse</span> para os modelos dos botões e cards dos projetos;</li>
                            <li><span>Freepik</span> para algumas das fotos colocadas nos cards dos projetos.</li>
                            <li><span>Google Fonts</span> para as fontes do site;</li>
                            <li><span>Flaticon</span> para os icones das tecnologias;</li>
                            <li><span>Piliapp</span> para os emojis utilizados;</li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar