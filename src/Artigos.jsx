import './css/Projs_Tecs_Arts_Cont.css'
import ScrollTela from './ScrollTela';

function Artigos(){
    return(
        <>
        <ScrollTela>
        <div className="div-contato" style={{marginBottom: '1.6rem'}}>
            <h3 className="sub-titulos" style={{marginTop:'1.8rem'}}>📗Alguns Conhecimentos</h3>
        </div>
        <div className="div-projetos">
            <div className="card">
                <div class="bg bg_projeto">
                    <h4 className="sub-titulo-projeto fundo-artigos">Como Resolver exercícios em JS no Becrowd</h4>
                    <img className="img-projetos" alt="Conhecimento 1" src="/images/becrowd.png"></img>
                    <br/>
                    <button onClick={() => alert("Artigo em Desenvolvimento...")} className="button-github" style={{marginTop: '0.8rem'}}>
                    Ver 
                    </button>              
                </div>
                <div class="blob"></div>
            </div>
            <div className="card">
                <div class="bg bg_projeto">
                    <h4 className="sub-titulo-projeto fundo-artigos">Meu TCC da Unioeste, curso: Ciência da Computação</h4>
                    <img className="img-projetos" alt="conhecimento 2" src="/images/cc.png"></img>
                    <br/>
                    <a href="/src/assets/TCC_Final_Leonardo_Balan.pdf" target="_blank">
                        <button className="button-github" style={{marginTop: '0.8rem'}}>Ver</button>       
                    </a>       
                </div>
                <div class="blob"></div>
            </div>
        </div>
        </ScrollTela>
    </>
    );
}

export default Artigos