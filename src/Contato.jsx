import './css/Projs_Tecs_Arts_Cont.css'
import ScrollTela from './ScrollTela';
import { useState } from 'react';

function Contato(){
   const [mostrarEmail, setMostrarEmail] = useState(false);
   const [mostrarWats, setMostrarWats] = useState(false);
    return (
        <>
        <ScrollTela>
            <div id='scrol-contato' className="div-contato">
                <h3 className="sub-titulos">📞Contate-me</h3>
            </div>
            <div className="div-contato-images">
                 <div className='gmail-container'>
                    {mostrarWats && (
                        <>
                            <button onClick={() => setMostrarWats(false)} id='fechar-wats'>X</button>
                            <div className='mostrar-contato-wats'>(44)997748427</div>
                        </>
                     )}
                     <a onClick={() => setMostrarWats(!mostrarWats)} style={{cursor: 'pointer'}}>
                         <img alt="Meu número de telefone/wats" src="/images/wats.png" className="icon"></img>
                    </a>
                    
                </div>
                
                <a href="https://www.linkedin.com/in/leonardo-balan" target="_blank">
                    <img alt="Meu Linkedin" src="/images/linkedin.png" className="icon"></img>
                </a>
                <a href="/images/Currículo.pdf" target="_blank">
                    <button className='buttons'>
                    <span className="transition"></span>
                    <span className="gradient"></span>
                    <span className="label">Meu Currículo</span> 
                    </button>
                </a>
                <a href="https://www.instagram.com/lens.balan" target="_blank">
                    <img alt="Meu instagram" src="/images/instagram.png" className="icon"></img>
                </a>
                <div className="gmail-container">
                    {mostrarEmail && (
                        <>
                            <button id='fechar-gmail' onClick={() => setMostrarEmail(false)}>X</button>
                            <div className="mostrar-contato-gmail">lensrambinho21@gmail.com</div>
                        </>
                    )}
                    <a onClick={() => setMostrarEmail(!mostrarEmail)} style={{ cursor: 'pointer' }}>
                        <img alt="Meu gmail" src="/images/gmail.png" className="icon" />
                    </a>
                </div>
                </div>
            </ScrollTela>
        </>
    );
}

export default Contato