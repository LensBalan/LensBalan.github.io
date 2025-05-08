import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

function Navbar(){
    const [abrirMenu, setabrirMenu] = useState(false);
    const [mostrarModal,setMostrarModal] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const irParaHome = () => {
        if (location.pathname === "/") {
            if (window.scrollY === 0) {
                alert("Você já está na Página Principal!");
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        } else {
            navigate('/');
        }
    };

    return (
        <div>
            <nav>
                <div className="navbar-linha">
                    <img alt='Foto do Lens' src="/src/assets/Logo.png" className='logo'></img>
                    <h4 className='fonte-titulos cor'>Portfólio Dev</h4>
                    <div className='dropdown'>
                        <button onClick={() => setabrirMenu(!abrirMenu)} className='dropbtn fonte-titulos cor'>▼</button>
                        {abrirMenu && (
                            <div className='conteudo-dropdown'>
                                <a onClick={irParaHome}>Página Principal</a>
                                <a onClick={() => setMostrarModal(true)}>Sobre o site</a>
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
                            <li><span>React</span> como framework/biblioteca;</li>
                            <li><span>HTML</span>, <span>JavaScript</span> e <span>CSS(puro)</span>;</li>
                            <li><span>UIverse</span> para os modelos dos botões e cards dos projetos;</li>
                            <li><span>Freepik</span> para as fotos colocadas nos cards dos projetos.</li>
                            <li><span>Google Fonts</span> para as fontes do site;</li>
                            <li><span>Flaticon</span> para os icones das tecnologias;</li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar