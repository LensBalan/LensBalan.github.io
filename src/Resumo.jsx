import { useNavigate } from 'react-router-dom';
import './css/Resumo.css'
import ScrollTela from './ScrollTela';

function Resumo(){
    const navigate = useNavigate();
    return (
        <div className="boas-vindas">
             <ScrollTela>
            <h1 id='lens' className='fonte-titulos texto-bounce'>Opa, eu sou o Leonardo Balan, <br/> mais conhecido como <span className="lens-text">Lens!</span></h1>
            <div className="div-flex">
                <h2 className='fonte-titulos pra_cima'>Seja Bem Vindo ao meu Portfólio Dev<span id='noefects'>👍</span></h2>   
                <div className="wrapper">
                    <img alt="Foto do Lens" src="/images/ft.jpg" className="imagem-lens"></img>
                </div> 
            </div>
             
            <div className='resumo'>
                <h3 className='sub-titulos'>📑Resumo sobre mim</h3>
                <p id='texto-resumo'className='fonte-texto' style={{marginBottom: '0.9rem', marginTop: '1.75rem'}}>Tenho <span className='texto-sublinado'>22 anos</span>, sou natural de Roncador–PR e <span className='texto-sublinado'>me mudei para Cascavel em 2017</span>, onde iniciei minha jornada no mundo da <span className='texto-sublinado'>Computação</span>. Formei-me como <span className='texto-sublinado'>Técnico em Informática pelo IFPR</span> (2017–2021). Em seguida, fui aprovado no vestibular na primeira tentativa e atualmente estou concluindo a graduação em <span className='texto-sublinado'>Bacharelado em Ciência da Computação pela Unioeste</span> (2021–2025).
                Em ambas as instituições, <span className='texto-sublinado'>explorei, testei e solucionei problemas em diversas áreas da Computação</span>, adquirindo uma boa compreensão tanto da teoria quanto da prática, utilizando as tecnologias disponíveis de cada campo. Atuei em áreas como Banco de Dados, Estruturas de Dados, Redes de Computadores, Inteligência Artificial, Computação em Nuvem, Engenharia de Software, Aprendizado de Máquina, entre outras. <span className='texto-sublinado'>Ao longo desses anos, aprendi muito e desenvolvi um grande interesse por esse vasto repertório que é a área da Tecnologia</span>. Para mais informações sobre mim e alguns conhecimentos, acesse <span className='texto-sublinado'>meu blog</span> clicando no botão abaixo.</p>
                <button className='buttons' onClick={() => navigate('/blog')} /*onClick={() => alert("Aba em Desenvolvimento...")}*/ >
                    <span className="transition"></span>
                    <span className="gradient"></span>
                    <span className="label">Meu Blog</span> 
                </button>
            </div>
            </ScrollTela>
        </div>
    );
}

export default Resumo