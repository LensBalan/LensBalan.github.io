import ScrollTela from "../components/ScrollTela";
import '../css/MeuBlog.css';

function SobreMim () {
    return (
        <>
            <ScrollTela>
                <div className="general-infos">
                    <h1 className="titulo-info-blog">Um Pouco mais Sobre Mim🧑‍💼</h1>
                    <p className="data-post">13/06/2025</p>
                    <figure className="imagem-com-legenda">
                        <img alt="foto do Lens" src="/images/sobre-mim.jpg" id="ft-sobre-mim" />
                        <figcaption className="legenda-foto">Não uso mais esse estilo de cabelo nem esse 'bigode', mas é uma boa foto de perfil — ou de enquadro.</figcaption>
                    </figure>
                    <p className="texto-info">Opa! Sou o Leonardo Bednarczuk Balan de Oliveira, mais conhecido como Lens, e tenho 22 anos. Há anos venho me desenvolvendo na área da Computação, e este é o foco deste portfólio. Porém, tem algumas características e habilidades que extrapolam essa área. <br/><br/></p>
                    <ul className="lista-blog">
                        <li>Sempre pratiquei e gostei muito de esportes (principalmente futebol e vôlei), além da academia, a qual frequento há 3 anos.</li>
                        <li>Estou me aprofundando em JavaScript atualmente, com o foco de me tornar Full-Stack com a linguagem (ela torna isso possível). Porém outras linguagens e tecnologias são sempre bem vindas.</li>
                        <li>Gosto de assistir séries, filmes e documentários (como a maioria das pessoas). Tenho um gosto a + por filmes baseados em fatos reais e acontecimentos históricos, além de películas de suspense.</li>
                        <li>Quero me encontrar na área da Computação para o cargo que exercerei na vida. São muitas opções — quero ver em qual me encaixo melhor (Desenvolvedor, Analista, Gerente de Projetos, Consultor de Sucesso do Cliente, etc). Veremos o que a vida proporá.</li>
                        <li>Gosto de manter uma organização no meu dia a dia, tendo previamente um script do que farei diariamente (tenho até um quadrinho de canetão no quarto).</li>
                        <li>Em 90% do tempo no IFPR e na Unioeste, estudei o desenvolvimento do Back-end das aplicações; atualmente estou estudando mais o Front-end.</li>
                        <li>Me considero um cara muito tranquilo. Dificilmente me estresso ou perco a cabeça. Literalmente me importo comigo, com quem amo e com quem conheço/convivo mais. De resto, o mundão gira e não tenho muito o que fazer — é assim que as coisas acontecem.</li>
                        <li>Anseio por me destacar na área em que trabalharei, entrar no mercado de trabalho e ir me aprofundando. É um bom caminho.</li>
                        <li>Gosto muito de games em geral, principalmente FPS, RTS, RPG e jogos com uma boa história. Meus games atuais que + jogo são: Counter-Strike 2, Total War: Warhammer 2 e Battlefield 1. Porém, já joguei inúmeros jogos e gostei muito, como FIFA, CS 1.6, The Witcher, Skyrim, Call of Duty, Clash Royale, etc.</li>
                        <li>Conheço diversas tecnologias, frameworks e linguagens de programação, acredito que me adaptaria bem em qualquer contexto de trabalho na área.</li>
                    </ul>
                    <p className="texto-info">Enfim, essas são algumas das minhas características mais pontuais. Tenho inúmeras outras. Caso queira me conhecer melhor, entre em contato comigo, marque uma entrevista, um fut, aquele vôlei de areia, algum evento, um game no sábado à noite… até quem sabe uma festa universitária.<br/><br/>Falou.<br/><br/></p>
                </div>
            </ScrollTela>

        </>
    );
}

export default SobreMim