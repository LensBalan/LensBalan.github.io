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
                    <img className="ft-tecnologias" alt="JavaScript" src="/images/js.png"></img>
                         <span className='texto-tecnologia'>JavaScript</span>
                </div>
                <div className='tecno'>
                    <img className="ft-tecnologias" alt="HTML" src="/images/html-5.png"></img>
                </div>
                <div className='tecno'>
                    <img className="ft-tecnologias" alt="CSS" src="/images/css-3.png"></img>
                </div>
                <div className='tecno'>
                    <img className="ft-tecnologias" alt="NodeJS" src="/images/nodejs.png"></img>
                </div>
                <div className='tecno'>
                    <img className="ft-tecnologias" alt="python" src="/images/python.png"></img>
                     <span className='texto-tecnologia'>Python</span>
                </div>
                <div className='tecno'>
                    <img className="ft-tecnologias" alt="C" src="/images/letra-c.png"></img>
                </div>
                <div className='tecno'>
                    <img className="ft-tecnologias" alt="React" src="/images/react.svg"></img>
                     <span className='texto-tecnologia'>React</span>
                </div>
                <div className='tecno'>
                    <img className="ft-tecnologias" alt="PostgreSQL" src="/images/postgre.png"></img>
                     <span className='texto-tecnologia'>PostgreSQL</span>
                </div>
                <div className='tecno'>
                    <img className="ft-tecnologias" alt="Mysql" src="/images/mysql.png"></img>
                </div>
                <div className='tecno'>
                    <img className="ft-tecnologias" alt="Vite" src="/images/vite.svg"></img>
                     <span className='texto-tecnologia'>Vite</span>
                </div>
                <div className='tecno'>
                    <img className="ft-tecnologias" alt="Bootstrap" src="/images/bootstrap.png"></img>
                     <span className='texto-tecnologia'>Bootstrap</span>
                </div>
                <div className='tecno'>
                    <img className="ft-tecnologias" alt="Jupyter Notebook" src="/images/jupyter.png"></img>
                     <span className='texto-tecnologia'>Jupyter Notebook</span>
                </div>
                <div className='tecno'>
                    <img className="ft-tecnologias" alt="Assembly x64 Linux" src="/images/assem.png"></img>
                     <span className='texto-tecnologia'>Assembly x64 Linux</span>
                </div>
                <div className='tecno'>
                    <img className="ft-tecnologias" alt="Linux" src="/images/linux.png"></img>
                     <span className='texto-tecnologia'>Linux</span>
                </div>
                <div className='tecno'>
                    <img className="ft-tecnologias" alt="Babel" src="/images/babel.png"></img>
                     <span className='texto-tecnologia'>Babel</span>
                </div>
                <div className='tecno'>
                    <img className="ft-tecnologias" alt="Web Pack Server" src="/images/webpack.png"></img>
                     <span className='texto-tecnologia'>Web Pack Server</span>
                </div>
                <div className='tecno'>
                    <img className="ft-tecnologias" alt="Golang" src="/images/go.png"></img>
                     <span className='texto-tecnologia'>Golang</span>
                </div>
                <div className='tecno'>
                    <img className="ft-tecnologias" alt="Java" src="/images/java.png"></img>
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