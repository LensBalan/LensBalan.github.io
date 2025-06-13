import ScrollTela from "../components/ScrollTela";
import '../css/MeuBlog.css'
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
                    <div className="cada-info" onClick={() => navigate('/sobreMim')}>
                        <div className="titulo-e-emoji">
                            <h2 className="titulo-infos">✦ Um Pouco + Sobre Mim</h2>
                            <h2 className="titulo-infos">🧑‍💼</h2>
                        </div>
                        <p className="data-post">Postado em: 13/06/2025</p>
                        <h4 className="descricao-infos">Vou contar um pouco mais sobre mim, meus hobbies e algumas curiosidades sobre minha relação com a Computação. Tudo está dividido em tópicos específicos, tornando a leitura rápida e intuitiva. Um breve explanamento de gostos e da minha conexão com a tecnologia.</h4>
                        <h4 className="quant-info"><strong>Quantidade de Palavras:</strong> 431</h4>
                        <h4 className="quant-info"><strong>Tempo de Leitura:</strong> 2:30 minutos</h4>
                    </div>
                    <div className="cada-info" onClick={() => navigate('/trajetoria')}>
                        <div className="titulo-e-emoji">
                            <h2 className="titulo-infos">✦ Minha Trajetória na Computação</h2>
                            <h2 className="titulo-infos">🧑‍💻</h2>
                        </div>
                        <p className="data-post">Postado em: 22/05/2025</p>
                        <h4 className="descricao-infos">Descrevo brevemente minha trajetória de 2017 até os dias atuais, período em que entrei e fui me envolvendo cada vez mais com essa grande área que é a Computação. Todos os principais eventos estão descritos de forma resumida, mostrando o caminho que me trouxe até aqui.</h4>
                        <h4 className="quant-info"><strong>Quantidade de Palavras:</strong> 651</h4>
                        <h4 className="quant-info"><strong>Tempo de Leitura:</strong> 4 minutos</h4>
                    </div>
                    <div className="cada-info" onClick={() => navigate('/problemasJS')}>
                        <div className="titulo-e-emoji">
                            <h2 className="titulo-infos">✦ Como Resolver Problemas do Beecrowd em JS</h2>
                            <h2 className="titulo-infos">✅</h2>
                        </div>
                        <p className="data-post">Postado em: 29/05/2025</p>
                        <h4 className="descricao-infos">Mostrarei de forma intuitiva como resolver e submeter problemas em JavaScript no Beecrowd. Às vezes isso pode ser um pouco complicado no início, pois o JavaScript não possui um comando explícito para entrada de dados pelo terminal. Por isso, aqui ajudarei.</h4>
                        <h4 className="quant-info"><strong>Quantidade de Palavras:</strong> 793</h4>
                        <h4 className="quant-info"><strong>Tempo de Leitura:</strong> 6 minutos</h4>
                    </div>
                    <div className="cada-info">
                        <h2 className="titulo-infos">✦ Aumentarei o conteúdo do blog de tempos em tempos</h2>
                        <p className="data-post">Em desenvolvimento...</p>
                        <h4 className="descricao-infos"></h4>
                    </div>
                </div>   
            </div>
            </ScrollTela>
           
        </>
    );

}

export default MeuBlog