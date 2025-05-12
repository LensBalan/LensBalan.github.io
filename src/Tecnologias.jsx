import './css/Projs_Tecs_Arts_Cont.css'
import ScrollTela from './ScrollTela';

function Tecnologias(){
    return (
        <>
        <ScrollTela>
            <div className="div-contato">
                <h3 className="sub-titulos">Tecnologias já Trabalhadas</h3>
            </div>
            <div className="div-tecnologias">
                <div className='tecno'>
                    <img className="ft-tecnologias" alt="JavaScript" src="/src/assets/js.png"></img>
                    <span className='texto-tecnologia'>JavaScript</span>
                </div>
                <div className='tecno'>
                    <img className="ft-tecnologias" alt="HTML" src="/src/assets/html-5.png"></img>
                     <span className='texto-tecnologia'>HTML</span>
                </div>
                <div className='tecno'>
                    <img className="ft-tecnologias" alt="CSS" src="/src/assets/css-3.png"></img>
                     <span className='texto-tecnologia'>CSS</span>
                </div>
                <div className='tecno'>
                    <img className="ft-tecnologias" alt="python" src="/src/assets/python.png"></img>
                     <span className='texto-tecnologia'>Python</span>
                </div>
                <div className='tecno'>
                    <img className="ft-tecnologias" alt="NodeJS" src="/src/assets/nodejs.png"></img>
                     <span className='texto-tecnologia'>NodeJS</span>
                </div>
                <div className='tecno'>
                    <img className="ft-tecnologias" alt="React" src="/src/assets/react.svg"></img>
                     <span className='texto-tecnologia'>React</span>
                </div>
                <div className='tecno'>
                    <img className="ft-tecnologias" alt="C" src="/src/assets/letra-c.png"></img>
                     <span className='texto-tecnologia'>C</span>
                </div>
                <div className='tecno'>
                    <img className="ft-tecnologias" alt="PostgreSQL" src="/src/assets/postgre.png"></img>
                     <span className='texto-tecnologia'>PostgreSQL</span>
                </div>
                <div className='tecno'>
                    <img className="ft-tecnologias" alt="Mysql" src="/src/assets/mysql.png"></img>
                     <span className='texto-tecnologia'>Mysql</span>
                </div>
            </div>
            </ScrollTela>
        </>
    );
}

export default Tecnologias