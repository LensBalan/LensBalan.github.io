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
                <div class="wrapper">
                    <img alt="Foto do Lens" src="/src/assets/ft.jpg" className="imagem-lens"></img>
                </div> 
            </div>
             
            <div className='resumo'>
                <h3 className='sub-titulos'>📑Resumo sobre mim</h3>
                <p id='texto-resumo'className='fonte-texto' style={{marginBottom: '1vh', marginTop: '4vh'}}>Tenho 22 anos, sou natural de Roncador–PR e me mudei para Cascavel em 2017, onde iniciei minha jornada no mundo da Computação. Formei-me como Técnico em Informática pelo IFPR (2017–2021). Em seguida, fui aprovado no vestibular na primeira tentativa e atualmente estou concluindo a graduação em Bacharelado em Ciência da Computação pela Unioeste (2021–2025).
Em ambas as instituições, explorei, testei e solucionei problemas em diversas áreas da Computação, adquirindo uma boa compreensão tanto da teoria quanto da prática, utilizando as tecnologias disponíveis de cada campo. Atuei em áreas como Banco de Dados, Estruturas de Dados, Redes de Computadores, Inteligência Artificial, Computação em Nuvem, Engenharia de Software, Aprendizado de Máquina, entre outras.
Ao longo desses anos, tive contato com diversas tecnologias, cuja experiência detalho melhor em uma página individual — é só clicar no botão abaixo.
</p>
                <button className='buttons'onClick={() => navigate('/sobre')}>
                    <span class="transition"></span>
                    <span class="gradient"></span>
                    <span class="label ">+ Sobre mim</span> 
                </button>
            </div>
            </ScrollTela>
        </div>
    );
}

export default Resumo