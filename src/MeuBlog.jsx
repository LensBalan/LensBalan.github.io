import ScrollTela from "./ScrollTela";
import './css/MeuBlog.css';

function MeuBlog() {
    return (
        <>  
            <div className="general">
                <ScrollTela>
                <div>
                    <h1 id="titulo" className="fonte-titulos">Você Chegou ao Meu Blog!</h1>
                    <h2 id="sub-titulo" className="fonte-titulos">Me Proponho a postar aqui conhecimentos <br/> e um pouco + sobre mim</h2>
                </div>
                <div className="div-infos">
                    <div className="cada-info">
                        <h2 className="titulo-infos">☛Um Pouco + Sobre Mim☚</h2>
                        <p className="data-post">Postado em: xx/xx/xxxx</p>
                        <h4 className="descricao-infos">Descrevo um pouco mais sobre mim, minha vida, meus hoobies e como eu divido bem o meu tempo dsdewe wewrwe r3hrwbhbwhr brhwbrhwbrhwbr rbwhrbwhbrh wrbwhrbwh rhwbrhwbr rwhrbwhbfb bhwbrhwbr brh b hwbrh b hb.</h4>
                    </div>
                     <div className="cada-info">
                        <h2 className="titulo-infos">☛Um Pouco + Sobre Mim☚</h2>
                        <p className="data-post">Postado em: xx/xx/xxxx</p>
                        <h4 className="descricao-infos">Descrevo um pouco mais sobre mim, minha vida, meus hoobies e como eu divido bem o meu tempo dsdewe wewrwe r3hrwbhbwhr brhwbrhwbrhwbr rbwhrbwhbrh wrbwhrbwh rhwbrhwbr rwhrbwhbfb bhwbrhwbr brh b hwbrh b hb.</h4>
                    </div>
                    <div className="cada-info">
                        <h2 className="titulo-infos">☛Um Pouco + Sobre Mim☚</h2>
                        <p className="data-post">Postado em: xx/xx/xxxx</p>
                        <h4 className="descricao-infos">Descrevo um pouco mais sobre mim, minha vida, meus hoobies e como eu divido bem o meu tempo dsdewe wewrwe r3hrwbhbwhr brhwbrhwbrhwbr rbwhrbwhbrh wrbwhrbwh rhwbrhwbr rwhrbwhbfb bhwbrhwbr brh b hwbrh b hb.</h4>
                    </div>
                </div>
                </ScrollTela>
            </div>
           
        </>
    );

}

export default MeuBlog