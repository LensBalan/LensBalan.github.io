import { useNavigate } from 'react-router-dom';


function Resumo(){
    const navigate = useNavigate();
    return (
        <div className="boas-vindas">
            <h1 id='lens' className='fonte-titulos texto-bounce'>Opa, Eu sou o Leonardo Balan <br/> mais conhecido como <span className="lens-text">Lens!</span></h1>
            <div className="div-flex">
                <h2 className='fonte-titulos pra_cima'>Seja Bem Vindo ao meu Portfólio Dev<span id='noefects'>👍</span></h2>   
                <div class="wrapper">
                    <img alt="Foto do Lens" src="/src/assets/ft.jpg" className="imagem-lens"></img>
                </div> 
            </div>
            <h3 className='sub-titulos'>Resumo sobre mim:</h3>
            <p className='fonte-texto' style={{marginBottom: '2vh', marginTop: '4vh'}}>Me formei Técnico em Informática pelo IFPR (2017–2021). Em seguida, passei no vestibular na primeira tentativa e ingressei no curso de Ciência. ewwwwwwwwwwwwwwww wwwdwfefegggggggggggggg gggggggggggggggggrererthgtht jtgrfeffuenfuenuneurejrwejwujrwuirjnwjrwruwjr iwjrwnrjwnruwnruwruw3 thuetugenurnw uejqiwjeiwjeiwuejriwjri</p>
            <button className='buttons'onClick={() => navigate('/sobre')}>
                <span class="transition"></span>
                <span class="gradient"></span>
                <span class="label ">+ Sobre mim</span> 
            </button>
        </div>
    );
}

export default Resumo