import './css/Projs_Tecs_Arts_Cont.css'
import ScrollTela from './ScrollTela';

function Artigos(){
    return(
        <>
        <ScrollTela>
        <div className="div-contato" style={{marginBottom: '1.8rem'}}>
            <h3 className="sub-titulos">📗Alguns Conhecimentos</h3>
        </div>
        <div className="div-projetos">
            <div className="card">
                <div class="bg bg_projeto">
                    <h4 className="projeto">Como Resolver exercícios em JavaScript no Becrowd</h4>
                    <img className="img-projetos" alt="Conhecimento 1" src="/src/assets/becrowd.png"></img>
                    <br/>
                    <button onClick={() => alert("Aba em construção...")} className="button-github">
                    Ver 
                    </button>              
                </div>
                <div class="blob"></div>
            </div>
            <div className="card">
                <div class="bg bg_projeto">
                    <h4 className="projeto">Meu TCC da Unioeste, curso: Ciência da Computação</h4>
                    <img className="img-projetos" alt="conhecimento 2" src="/src/assets/cc.png"></img>
                    <br/>
                    <a href="/src/assets/TCC_Final_Leonardo_Balan.pdf" target="_blank">
                        <button className="button-github">Ver</button>       
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