import './css/Projs_Tecs_Arts_Cont.css'
import ScrollTela from './ScrollTela';
import { useState } from 'react';

function Contato(){
   const [mostrarEmail, setMostrarEmail] = useState(false);
   const [mostrarWats, setMostrarWats] = useState(false);
    return (
        <>
        <ScrollTela>
            <div className="div-contato">
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
                         <img alt="Meu número de telefone/wats" src="/src/assets/wats.png" className="icon"></img>
                    </a>
                    
                </div>
                
                <a href="https://www.linkedin.com/in/leonardo-balan" target="_blank">
                    <img alt="Meu Linkedin" src="/src/assets/linkedin.png" className="icon"></img>
                </a>
                <a href="/src/assets/Currículo.pdf" target="_blank">
                    <button className='buttons'>
                    <span class="transition"></span>
                    <span class="gradient"></span>
                    <span class="label">Meu Currículo</span> 
                    </button>
                </a>
                <a href="https://www.instagram.com/lens.balan" target="_blank">
                    <img alt="Meu instagram" src="/src/assets/instagram.png" className="icon"></img>
                </a>
                <div className="gmail-container">
                    {mostrarEmail && (
                        <>
                            <button id='fechar-gmail' onClick={() => setMostrarEmail(false)}>X</button>
                            <div className="mostrar-contato-gmail">lensrambinho21@gmail.com</div>
                        </>
                    )}
                    <a onClick={() => setMostrarEmail(!mostrarEmail)} style={{ cursor: 'pointer' }}>
                        <img alt="Meu gmail" src="/src/assets/gmail.png" className="icon" />
                    </a>
                </div>
                </div>
            </ScrollTela>
        </>
    );
}

export default Contato