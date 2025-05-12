import './css/Projs_Tecs_Arts_Cont.css'
import ScrollTela from './ScrollTela';

function Projetos(){
    return(
        <>
        <ScrollTela>
            <div className="div-contato">
                <h3 className="sub-titulos">Meus Projetos</h3>
            </div>
            <div className="div-projetos">
                <div className="card">
                    <div class="bg bg_projeto">
                        <h4 className="projeto titulo-projeto">Projeto 1</h4>
                        <h4 className="projeto">Lista de Tarefas</h4>
                        <img className="img-projetos" alt="Projeto 1" src="/src/assets/lista.jpg"></img>
                        <br/>
                        <button className='button-projetos'> 
                            <span class="shadow"></span>
                            <span class="edge"></span>
                            <span class="front">Descrição</span>
                        </button>
                        <a href="" target="_blank">
                            <button className="button-github" style={{marginTop:'1.2vh'}}>
                            Ver projeto no Github
                            </button>
                        </a>                
                    </div>
                    <div class="blob"></div>
                </div>
                <div className="card">
                    <div class="bg bg_projeto">
                        <h4 className="projeto titulo-projeto">Projeto 1</h4>
                        <h4 className="projeto">Lista de Tarefas</h4>
                        <img className="img-projetos" alt="Projeto 1" src="/src/assets/lista.jpg"></img>
                        <br/>
                        <button className='button-projetos'> 
                            <span class="shadow"></span>
                            <span class="edge"></span>
                            <span class="front text">Descrição</span>
                        </button>
                        <a href="" target="_blank">
                            <button className="button-github" style={{marginTop:'1.2vh'}}>
                            Ver projeto no Github
                            </button>
                        </a>                
                    </div>
                    <div class="blob"></div>
                </div>
                <div className="card">
                    <div class="bg bg_projeto">
                        <h4 className="projeto titulo-projeto">Projeto 1</h4>
                        <h4 className="projeto">Lista de Tarefas</h4>
                        <img className="img-projetos" alt="Projeto 1" src="/src/assets/lista.jpg"></img>
                        <br/>
                        <button className='button-projetos'> 
                            <span class="shadow"></span>
                            <span class="edge"></span>
                            <span class="front text">Descrição</span>
                        </button>
                        <a href="" target="_blank">
                            <button className="button-github" style={{marginTop:'1.2vh'}}>
                            Ver projeto no Github
                            </button>
                        </a>                
                    </div>
                    <div class="blob"></div>
                </div>
                <div className="card">
                    <div class="bg bg_projeto">
                        <h4 className="projeto titulo-projeto">Projeto 1</h4>
                        <h4 className="projeto">Lista de Tarefas</h4>
                        <img className="img-projetos" alt="Projeto 1" src="/src/assets/lista.jpg"></img>
                        <br/>
                        <button className='button-projetos'> 
                            <span class="shadow"></span>
                            <span class="edge"></span>
                            <span class="front text">Descrição</span>
                        </button>
                        <a href="" target="_blank">
                            <button className="button-github" style={{marginTop:'1.2vh'}}>
                            Ver projeto no Github
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

export default Projetos