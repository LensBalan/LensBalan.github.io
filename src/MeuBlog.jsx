import ScrollTela from "./ScrollTela";
import './css/MeuBlog.css'
import { useNavigate } from 'react-router-dom';

function MeuBlog() {
    const navigate = useNavigate();
    return (
        <>  
            <ScrollTela>
            <div className="general">
                <div>
                    <h1 id="titulo" className="fonte-titulos">Você Chegou ao Meu Blog!</h1>
                    <h2 id="sub-titulo" className="fonte-titulos">Aqui, me proponho a compartilhar conhecimentos e um pouco mais sobre mim.</h2>
                </div>
                <div className="div-infos">
                    <div className="cada-info" onClick={() => navigate('/trajetoria')}>
                        <div className="titulo-e-emoji">
                            <h2 className="titulo-infos">➡︎ Minha Trajetória na Computação ⬅︎</h2>
                            <h2 className="titulo-infos">🧑‍💻</h2>
                        </div>
                        <p className="data-post">Postado em: 22/05/2025</p>
                        <h4 className="descricao-infos">Descrevo brevemente minha trajetória de 2017 até os dias atuais, período em que entrei e fui me envolvendo cada vez mais com essa grande área que é a Computação. Todos os principais eventos estão descritos de forma resumida, mostrando o caminho que me trouxe até aqui.</h4>
                    </div>
                    <div className="cada-info" onClick={() => navigate('/sobre')}>
                        <div className="titulo-e-emoji">
                            <h2 className="titulo-infos">➡︎ Um Pouco + Sobre Mim ⬅︎</h2>
                            <h2 className="titulo-infos">🧑‍💼</h2>
                        </div>
                        <p className="data-post">Postado em: 22/05/2025</p>
                        <h4 className="descricao-infos">Descrevo brevemente minha trajetória de 2017 até os dias atuais, período em que entrei e fui me envolvendo cada vez mais com essa grande área que é a Computação. Todos os principais eventos estão descritos de forma resumida, mostrando o caminho que me trouxe até aqui.</h4>
                    </div>
                     <div className="cada-info">
                        <div className="titulo-e-emoji">
                            <h2 className="titulo-infos">➡︎ Como Resolver Problemas do Becrowd em JS ⬅︎</h2>
                            <h2 className="titulo-infos">✅</h2>
                        </div>
                        <p className="data-post">Postado em: xx/xx/xxxx</p>
                        <h4 className="descricao-infos">Descrevo um pouco mais sobre mim, minha vida, meus hoobies e como eu divido bem o meu tempo dsdewe wewrwe r3hrwbhbwhr brhwbrhwbrhwbr rbwhrbwhbrh wrbwhrbwh rhwbrhwbr rwhrbwhbfb bhwbrhwbr brh b hwbrh b hb.</h4>
                    </div>
                    <div className="cada-info">
                        <h2 className="titulo-infos">➡︎ Terão mais coisas aqui daqui um tempo ⬅︎</h2>
                        <p className="data-post">Em desenvolvimento...</p>
                        <h4 className="descricao-infos">.</h4>
                    </div>
                </div>   
            </div>
            </ScrollTela>
           
        </>
    );

}

export default MeuBlog