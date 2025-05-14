import './css/Projs_Tecs_Arts_Cont.css'
import ScrollTela from './ScrollTela';

function Tecnologias(){
    return (
        <>
        <ScrollTela>
            <div className="div-contato">
                <h3 className="sub-titulos" style={{marginTop:'1.85rem'}}>⚙️Tecnologias já Trabalhadas</h3>
            </div>
            <div className="div-tecnologias">
                <div className='tecno'>
                    <img className="ft-tecnologias" alt="JavaScript" src="/src/assets/js.png"></img>
                         <span className='texto-tecnologia'>JavaScript</span>
                </div>
                <div className='tecno'>
                    <img className="ft-tecnologias" alt="HTML" src="/src/assets/html-5.png"></img>
                </div>
                <div className='tecno'>
                    <img className="ft-tecnologias" alt="CSS" src="/src/assets/css-3.png"></img>
                </div>
                <div className='tecno'>
                    <img className="ft-tecnologias" alt="NodeJS" src="/src/assets/nodejs.png"></img>
                </div>
                <div className='tecno'>
                    <img className="ft-tecnologias" alt="python" src="/src/assets/python.png"></img>
                     <span className='texto-tecnologia'>Python</span>
                </div>
                <div className='tecno'>
                    <img className="ft-tecnologias" alt="C" src="/src/assets/letra-c.png"></img>
                </div>
                <div className='tecno'>
                    <img className="ft-tecnologias" alt="React" src="/src/assets/react.svg"></img>
                     <span className='texto-tecnologia'>React</span>
                </div>
                <div className='tecno'>
                    <img className="ft-tecnologias" alt="PostgreSQL" src="/src/assets/postgre.png"></img>
                     <span className='texto-tecnologia'>PostgreSQL</span>
                </div>
                <div className='tecno'>
                    <img className="ft-tecnologias" alt="Mysql" src="/src/assets/mysql.png"></img>
                </div>
                <div className='tecno'>
                    <img className="ft-tecnologias" alt="Vite" src="/src/assets/vite.svg"></img>
                     <span className='texto-tecnologia'>Vite</span>
                </div>
                <div className='tecno'>
                    <img className="ft-tecnologias" alt="Bootstrap" src="/src/assets/bootstrap.png"></img>
                     <span className='texto-tecnologia'>Bootstrap</span>
                </div>
                <div className='tecno'>
                    <img className="ft-tecnologias" alt="Jupyter Notebook" src="/src/assets/jupyter.png"></img>
                     <span className='texto-tecnologia'>Jupyter Notebook</span>
                </div>
                <div className='tecno'>
                    <img className="ft-tecnologias" alt="Assembly x64 Linux" src="/src/assets/assem.png"></img>
                     <span className='texto-tecnologia'>Assembly x64 Linux</span>
                </div>
                <div className='tecno'>
                    <img className="ft-tecnologias" alt="Linux" src="/src/assets/linux.png"></img>
                     <span className='texto-tecnologia'>Linux</span>
                </div>
                <div className='tecno'>
                    <img className="ft-tecnologias" alt="Babel" src="/src/assets/babel.png"></img>
                     <span className='texto-tecnologia'>Babel</span>
                </div>
                <div className='tecno'>
                    <img className="ft-tecnologias" alt="Web Pack Server" src="/src/assets/webpack.png"></img>
                     <span className='texto-tecnologia'>Web Pack Server</span>
                </div>
                <div className='tecno'>
                    <img className="ft-tecnologias" alt="Golang" src="/src/assets/go.png"></img>
                     <span className='texto-tecnologia'>Golang</span>
                </div>
                <div className='tecno'>
                    <img className="ft-tecnologias" alt="Java" src="/src/assets/java.png"></img>
                     <span className='texto-tecnologia'>Java</span>
                </div>
            </div>
            <div className='frase-lens'>
                <blockquote className='frase'>"Não fique se comparando aos outros, <br/> evolua no seu tempo."</blockquote>
            </div>
            </ScrollTela>
        </>
    );
}

export default Tecnologias