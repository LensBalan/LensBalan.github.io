import './css/Projs_Tecs_Arts_Cont.css'
import ScrollTela from './ScrollTela';
import { useState } from 'react';

function Projetos(){
    const [abrirDescricao, setAbrirDescricao] = useState(false);
    const [abrirDescricao2, setAbrirDescricao2] = useState(false);
    const [abrirDescricao3, setAbrirDescricao3] = useState(false);
    const [abrirDescricao4, setAbrirDescricao4] = useState(false);
    
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
                        <h4 className="projeto">Lista de Tarefas com JS</h4>
                        <img className="img-projetos" alt="Projeto 1" src="/src/assets/lista.jpg"></img>
                        <br/>
                        <button onClick={() => setAbrirDescricao(true)} className='button-projetos'> 
                            <span class="shadow"></span>
                            <span class="edge"></span>
                            <span class="front">Descrição</span>
                        </button>
                        {abrirDescricao && (
                            <div className='modal-overlay-descricao' onClick={() => setAbrirDescricao(false)}> 
                                <div className='modal-conteudo-descricao' onClick={e => e.stopPropagation()}>
                                    <button id='fechar' onClick={() => setAbrirDescricao(false)}>X</button>
                                    <p>Projeto implementado com HTML, CSS e JS para uma lista de tarefas.</p>
                                </div>

                            </div>
                        )}
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
                        <h4 className="projeto titulo-projeto">Projeto 2</h4>
                        <h4 className="projeto">Exercícios do Becrowd com JS</h4>
                        <img className="img-projetos" alt="Projeto 1" src="/src/assets/lista.jpg"></img>
                        <br/>
                        <button onClick={() => setAbrirDescricao2(true)} className='button-projetos'> 
                            <span class="shadow"></span>
                            <span class="edge"></span>
                            <span class="front">Descrição</span>
                        </button>
                        {abrirDescricao2 && (
                            <div className='modal-overlay-descricao' onClick={() => setAbrirDescricao2(false)}> 
                                <div className='modal-conteudo-descricao' onClick={e => e.stopPropagation()}>
                                    <button id='fechar' onClick={() => setAbrirDescricao2(false)}>X</button>
                                    <p>Projeto implementado com HTML, CSS e JS para uma lista de tarefas.</p>
                                </div>

                            </div>
                        )}
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
                        <h4 className="projeto titulo-projeto">Projeto 3</h4>
                        <h4 className="projeto">Lista de Tarefas wdsds ewewe</h4>
                        <img className="img-projetos" alt="Projeto 1" src="/src/assets/lista.jpg"></img>
                        <br/>
                        <button onClick={() => setAbrirDescricao3(true)} className='button-projetos'> 
                            <span class="shadow"></span>
                            <span class="edge"></span>
                            <span class="front">Descrição</span>
                        </button>
                        {abrirDescricao3 && (
                            <div className='modal-overlay-descricao' onClick={() => setAbrirDescricao3(false)}> 
                                <div className='modal-conteudo-descricao' onClick={e => e.stopPropagation()}>
                                    <button id='fechar' onClick={() => setAbrirDescricao3(false)}>X</button>
                                    <p>Projeto implementado com HTML, CSS e JS para uma lista de tarefas.</p>
                                </div>
                            </div>
                        )}
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
                        <h4 className="projeto titulo-projeto">Projeto 4</h4>
                        <h4 className="projeto">Lista de Tarefas ewew dsdsds</h4>
                        <img className="img-projetos" alt="Projeto 1" src="/src/assets/lista.jpg"></img>
                        <br/>
                        <button onClick={() => setAbrirDescricao4(true)} className='button-projetos'> 
                            <span class="shadow"></span>
                            <span class="edge"></span>
                            <span class="front">Descrição</span>
                        </button>
                        {abrirDescricao4 && (
                            <div className='modal-overlay-descricao' onClick={() => setAbrirDescricao4(false)}> 
                                <div className='modal-conteudo-descricao' onClick={e => e.stopPropagation()}>
                                    <button id='fechar' onClick={() => setAbrirDescricao4(false)}>X</button>
                                    <p>Projeto implementado com HTML, CSS e JS para uma lista de tarefas.</p>
                                </div>
                            </div>
                        )}
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