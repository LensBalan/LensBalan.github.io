import './css/Projs_Tecs_Arts_Cont.css'
import ScrollTela from './ScrollTela';

function Artigos(){
    return(
        <>
        <ScrollTela>
        <div className="div-contato">
            <h3 className="sub-titulos">Alguns Conhecimentos</h3>
        </div>
        <div className="div-projetos">
        <div className="card">
                    <div class="bg bg_projeto">
                        <h4 className="projeto">Como Resolver exercícios em JavaScript no Becrowd</h4>
                        <img className="img-projetos" alt="Projeto 1" src="/src/assets/becrowd.png"></img>
                        <br/>
                        <a href="" target="_blank">
                            <button className="button-github">
                            Ver 
                            </button>
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