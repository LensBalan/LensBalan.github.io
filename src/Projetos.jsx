import './css/Projs_Tecs_Arts_Cont.css'
import ScrollTela from './ScrollTela';
import { useState } from 'react';

function Projetos(){
    const [abrirDescricao, setAbrirDescricao] = useState(false);
    const [abrirDescricao2, setAbrirDescricao2] = useState(false);
    const [abrirDescricao3, setAbrirDescricao3] = useState(false);
    const [abrirDescricao4, setAbrirDescricao4] = useState(false);
    const [abrirDescricao5, setAbrirDescricao5] = useState(false);
    const [abrirDescricao6, setAbrirDescricao6] = useState(false);
    const [abrirDescricao7, setAbrirDescricao7] = useState(false);
    const [abrirDescricao8, setAbrirDescricao8] = useState(false);
    return(
        <>
        <ScrollTela>
            <div className="div-contato" style={{marginBottom: '1.6rem'}}>
                <h3 className="sub-titulos">🧑‍💻Meus Projetos</h3>
            </div>
            <div className="div-projetos">
                <div className="card">
                    <div class="bg bg_projeto">
                        <h4 className="titulo-projeto">Projeto 1</h4>
                        <h4 className="sub-titulo-projeto">Lista de Tarefas em JS</h4>
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
                                    <p>Projeto implementado com HTML, CSS(Bootstrap) e JS, quando eu estava me familiarizando com a Programação WEB.</p>
                                </div>
                            </div>
                        )}
                        <br/>
                        <a href="https://github.com/LensBalan/Lista-de-Tarefas" target="_blank">
                            <button className="button-github" style={{marginTop:'1.2vh'}}>
                            Ver projeto no Github
                            </button>
                        </a>                
                    </div>
                    <div class="blob"></div>
                </div>
                <div className="card">
                    <div class="bg bg_projeto">
                        <h4 className="titulo-projeto">Projeto 2</h4>
                        <h4 className="sub-titulo-projeto">Problemas do Becrowd em JS</h4>
                        <img className="img-projetos" alt="Projeto 2" src="/src/assets/bee.png"></img>
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
                                    <p>Um desafio que estou realizando aos poucos: Resolver todos os 334 problemas do Becrowd em JS.</p>
                                </div>

                            </div>
                        )}
                        <br/>
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
                        <h4 className="titulo-projeto">Projeto 3</h4>
                        <h4 className="sub-titulo-projeto">Fill Poly - Preencher Polígonos</h4>
                        <img className="img-projetos" alt="Projeto 3" src="/src/assets/poligonos.jpg"></img>
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
                                    <p>Projeto implementado em Python que permite desenhar múltiplos polígonos na tela, preenchendo-os com cores personalizadas. (+ features)</p>
                                </div>
                            </div>
                        )}
                        <br/>
                        <a href="https://github.com/LensBalan/Fill-poly" target="_blank">
                            <button className="button-github" style={{marginTop:'1.2vh'}}>
                            Ver projeto no Github
                            </button>
                        </a>                
                    </div>
                    <div class="blob"></div>
                </div>
                <div className="card">
                    <div class="bg bg_projeto">
                        <h4 className="titulo-projeto">Projeto 4</h4>
                        <h4 className="sub-titulo-projeto">Buscador de Repositórios GitHub</h4>
                        <img className="img-projetos" alt="Projeto 4" src="/src/assets/git.jpg"></img>
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
                                    <p>Projeto implementado com HTML, CSS e JS(com assync). Além de utilizar as ferramentas Babel e Web Pack Server.</p>
                                </div>
                            </div>
                        )}
                        <br/>
                        <a href="https://github.com/LensBalan/Buscar-Repositorios-Github" target="_blank">
                            <button className="button-github" style={{marginTop:'1.2vh'}}>
                            Ver projeto no Github
                            </button>
                        </a>                
                    </div>
                    <div class="blob"></div>
                </div>
                <div className="card">
                    <div class="bg bg_projeto">
                        <h4 className="titulo-projeto">Projeto 5</h4>
                        <h4 className="sub-titulo-projeto">Conversor String to Int em Assembly</h4>
                        <img className="img-projetos" alt="Projeto 5" src="/src/assets/assembly.jpg"></img>
                        <br/>
                        <button onClick={() => setAbrirDescricao5(true)} className='button-projetos'> 
                            <span class="shadow"></span>
                            <span class="edge"></span>
                            <span class="front">Descrição</span>
                        </button>
                        {abrirDescricao5 && (
                            <div className='modal-overlay-descricao' onClick={() => setAbrirDescricao5(false)}> 
                                <div className='modal-conteudo-descricao' onClick={e => e.stopPropagation()}>
                                    <button id='fechar' onClick={() => setAbrirDescricao5(false)}>X</button>
                                    <p>Conversor de String de até 64 bits para Inteiro; Implementado em Assembly x64 Linux.</p>
                                </div>
                            </div>
                        )}
                        <br/>
                        <a href="https://github.com/LensBalan/ConvertStringtoInt" target="_blank">
                            <button className="button-github" style={{marginTop:'1.2vh'}}>
                            Ver projeto no Github
                            </button>
                        </a>                
                    </div>
                    <div class="blob"></div>
                </div>
                <div className="card">
                    <div class="bg bg_projeto">
                        <h4 className="titulo-projeto">Projeto 6</h4>
                        <h4 className="sub-titulo-projeto">Algs. de Regressão - A. de Máquina</h4>
                        <img className="img-projetos" alt="Projeto 6" src="/src/assets/regressao.jpg"></img>
                        <br/>
                        <button onClick={() => setAbrirDescricao6(true)} className='button-projetos'> 
                            <span class="shadow"></span>
                            <span class="edge"></span>
                            <span class="front">Descrição</span>
                        </button>
                        {abrirDescricao6 && (
                            <div className='modal-overlay-descricao' onClick={() => setAbrirDescricao6(false)}> 
                                <div className='modal-conteudo-descricao' onClick={e => e.stopPropagation()}>
                                    <button id='fechar' onClick={() => setAbrirDescricao6(false)}>X</button>
                                    <p>Algoritmos de Regressão com aprendizado de máquina aplicados à uma base de dados sobre a expectativa de vida por país.(Jupyter Notebook)</p>
                                </div>
                            </div>
                        )}
                        <br/>
                        <a href="https://github.com/LensBalan/Metodos-de-Regressao" target="_blank">
                            <button className="button-github" style={{marginTop:'1.2vh'}}>
                            Ver projeto no Github
                            </button>
                        </a>                
                    </div>
                    <div class="blob"></div>
                </div>
                <div className="card">
                    <div class="bg bg_projeto">
                        <h4 className="titulo-projeto">Projeto 7</h4>
                        <h4 className="sub-titulo-projeto">Leitor de imagens Fat-16 em C</h4>
                        <img className="img-projetos" alt="Projeto 7" src="/src/assets/fat16.jpg"></img>
                        <br/>
                        <button onClick={() => setAbrirDescricao7(true)} className='button-projetos'> 
                            <span class="shadow"></span>
                            <span class="edge"></span>
                            <span class="front">Descrição</span>
                        </button>
                        {abrirDescricao7 && (
                            <div className='modal-overlay-descricao' onClick={() => setAbrirDescricao7(false)}> 
                                <div className='modal-conteudo-descricao' onClick={e => e.stopPropagation()}>
                                    <button id='fechar' onClick={() => setAbrirDescricao7(false)}>X</button>
                                    <p>Projeto em C desenvolvido para ler imagens Fat-16 e exibir diversas informações, como dados do boot record, entradas de diretório, etc.</p>
                                </div>
                            </div>
                        )}
                        <br/>
                        <a href="https://github.com/LensBalan/Leitor-FAT16" target="_blank">
                            <button className="button-github" style={{marginTop:'1.2vh'}}>
                            Ver projeto no Github
                            </button>
                        </a>                
                    </div>
                    <div class="blob"></div>
                </div>
                <div className="card">
                    <div class="bg bg_projeto">
                        <h4 className="titulo-projeto">Projeto 8</h4>
                        <h4 className="sub-titulo-projeto">Paralelização de Códigos em C</h4>
                        <img className="img-projetos" alt="Projeto 8" src="/src/assets/paralel.png"></img>
                        <br/>
                        <button onClick={() => setAbrirDescricao8(true)} className='button-projetos'> 
                            <span class="shadow"></span>
                            <span class="edge"></span>
                            <span class="front">Descrição</span>
                        </button>
                        {abrirDescricao8 && (
                            <div className='modal-overlay-descricao' onClick={() => setAbrirDescricao8(false)}> 
                                <div className='modal-conteudo-descricao' onClick={e => e.stopPropagation()}>
                                    <button id='fechar' onClick={() => setAbrirDescricao8(false)}>X</button>
                                    <p>3 problemas da computação paralelizados com OpenMP e MPI. Estavam implementados sequencialmente.</p>
                                </div>
                            </div>
                        )}
                        <br/>
                        <a href="https://github.com/LensBalan/Paralelizacao-de-Codigos-em-C" target="_blank">
                            <button className="button-github" style={{marginTop:'1.2vh'}}>
                            Ver projeto no Github
                            </button>
                        </a>                
                    </div>
                    <div class="blob"></div>
                </div>
                <div className="card">
                    <div class="bg bg_projeto">
                        <h4 className="titulo-projeto">Meus Projetos📁</h4>
                         <h4 className="sub-titulo-projeto" style={{marginTop:'0.55rem'}}>Todos no Repositório Github Lens</h4>
                        <img className="img-projetos" alt="Projeto 7" src="/src/assets/gitlens.jpg"></img>
                        <br/>
                        <a href="https://github.com/LensBalan" target="_blank">
                            <button className="button-github" style={{marginTop:'0.7rem'}}>
                           Ir
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