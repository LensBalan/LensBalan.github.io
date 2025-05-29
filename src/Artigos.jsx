import './css/Projs_Tecs_Arts_Cont.css'
import ScrollTela from './ScrollTela';
import { Navigate, useNavigate } from 'react-router-dom';

function Artigos(){
    const navigate = useNavigate();
    return(
        <>
        <ScrollTela>
        <div className="div-contato" style={{marginBottom: '1.6rem'}}>
            <h3 className="sub-titulos" style={{marginTop:'1.8rem'}}>📗Alguns Conhecimentos</h3>
        </div>
        <div className="div-projetos">
            <div className="card">
                <div className="bg bg_projeto">
                    <h4 className="sub-titulo-projeto fundo-artigos">Como Resolver exercícios em JS no Beecrowd</h4>
                    <img className="img-projetos" alt="Conhecimento 1" src="/images/becrowd.png"></img>
                    <br/>
                    <button onClick={() => navigate('/problemasJS')} className="button-github" style={{marginTop: '0.8rem'}}>
                    Ver 
                    </button>              
                </div>
                <div className="blob"></div>
            </div>
            <div className="card">
                <div className="bg bg_projeto">
                    <h4 className="sub-titulo-projeto fundo-artigos">Meu TCC da Unioeste, Ciência da Computação</h4>
                    <img className="img-projetos" alt="conhecimento 2" src="/images/cc.png"></img>
                    <br/>
                    <a href="/images/TCC_Final_Leonardo_Balan.pdf" target="_blank">
                        <button className="button-github" style={{marginTop: '0.8rem'}}>Ver</button>       
                    </a>       
                </div>
                <div className="blob"></div>
            </div>
        </div>
        </ScrollTela>
    </>
    );
}

export default Artigos