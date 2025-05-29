import ScrollTela from "./ScrollTela";
import './css/MeuBlog.css';
import { useRef } from "react";

function ProblemasJS () {
    const topicosRef = {
        topico1: useRef(null),
        topico2: useRef(null),
        topico21: useRef(null),
        topico22: useRef(null),
        topico3: useRef(null),
        topico4: useRef(null),
        topico5: useRef(null),
    };

    const scrollTopico = (topico) => {
        topicosRef[topico]?.current?.scrollIntoView({behavior: 'smooth'});
        setTimeout(() => {
            window.scrollTo({
                top: window.scrollY - 70,
                behavior: 'smooth'
            });
        }, 1000);
    };

    return (
        <>
            <ScrollTela>
            <div className="general-infos">
                <h1 className="titulo-info-blog">Como Resolver Problemas em JavaScript no Beecrowd ✅</h1>
                <p className="data-post">29/05/2025</p>
                <div className="two-images">
                    <img alt="Beecrowd" src="/images/beecrowd-artigo.jpg"/>
                    <h1>+</h1>
                    <img alt="JavaScript" src="/images/js-artigo.jpg"/>
                </div>
            
                <div className="alinhamento-topicos">
                    <div className="topicos">
                        <a href="#" onClick={(e) => { e.preventDefault(); scrollTopico('topico1'); }} className="nivel1"><span>1º</span> Contextualização</a>
                        <a href="#" onClick={(e) => { e.preventDefault(); scrollTopico('topico2'); }} className="nivel1"><span>2º</span> Ferramentas Necessárias</a>
                        <a href="#" onClick={(e) => { e.preventDefault(); scrollTopico('topico21'); }} className="nivel2"><span>2.1</span> VS Code</a>
                        <a href="#" onClick={(e) => { e.preventDefault(); scrollTopico('topico22'); }} className="nivel2"><span>2.2</span> Node.js</a>
                        <a href="#" onClick={(e) => { e.preventDefault(); scrollTopico('topico3'); }} className="nivel1"><span>3º</span> Estrutura</a>
                        <a href="#" onClick={(e) => { e.preventDefault(); scrollTopico('topico4'); }} className="nivel1"><span>4º</span> Como Resolver</a>
                        <a href="#" onClick={(e) => { e.preventDefault(); scrollTopico('topico5'); }} className="nivel1"><span>5º</span> Como Submeter</a>
                    </div>
                </div>
                <section ref={topicosRef.topico1}></section>
                <h3 className="titulo-paragrafo">1º Contextualização</h3>
                <p className="texto-info">Na minha primeira experiência querendo resolver os exercícios do Beecrowd com JavaScript, tive uma mini dor de cabeça: “Como eu resolvo esses exercícios na minha máquina?” Pois o JS não tem um comando em si para entrada de dados pelo terminal/teclado e, quem conhece, sabe que nos exercícios do Beecrowd geralmente a entrada de dados é obtida pelo próprio terminal.<br/><br/></p> 
                <p className="texto-info">Num primeiro momento de estresse, resolvi não realizar esses exercícios simplesmente por esse fato. Dias depois, fui atrás de aprender como resolver aquilo e, hoje em dia, consigo utilizar na maior tranquilidade e vejo que é simples. <br/><br/> É esse conhecimento que trago hoje aqui para vocês.</p>
                <section ref={topicosRef.topico2}></section>
                <h3 className="titulo-paragrafo">2º Ferramentas Necessárias</h3>
                <p className="texto-info">Primeiramente, são necessárias duas ferramentas básicas: um editor de código (VS Code) e um ambiente de execução JavaScript fora de um navegador web, que é o Node.js. Caso já tenha as duas ferramentas instaladas e configuradas, pule para o próximo tópico.</p>
                <section ref={topicosRef.topico21}></section>
                <h3 className="titulo-paragrafo">2.1º VS Code</h3>
                <p className="texto-info">O Visual Studio Code é o mais famoso/popular atualmente entre os programadores, logo, darei a dica utilizando ele.<br/><br/>
Para baixá-lo é simples, basta ir em seu <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">site oficial</a> e clicar em fazer o download, considerando seu sistema operacional.
Os passos de instalação são bem simples, então não entrarei em muitos detalhes aqui.</p>
                <section ref={topicosRef.topico22}></section>
                <h3 className="titulo-paragrafo">2.2º Node.js</h3>
                <p className="texto-info">Precisamos do Node.js também, que é o mais fundamental, permitindo-nos executar JS no nosso VS Code.<br/><br/>
Para baixá-lo, basta entrar no <a href="https://nodejs.org/pt" target="_blank" rel="noopener noreferrer">site do Node.js</a> e fazer o download da versão LTS, que é a mais recomendada.
Siga os passos de instalação deixando as configurações padrão, e não tem segredo: você terá a ferramenta instalada em sua máquina.</p>
                <section ref={topicosRef.topico3}></section>
                <h3 className="titulo-paragrafo">3º Estrutura</h3>
                <p className="texto-info">Top! Agora, com tudo pronto para iniciar a resolução dos exercícios, temos a estrutura padrão que eu costumo seguir, o que facilita bastante na hora de resolver cada um deles.<br/><br/>
Primeiro, é necessário criar uma pasta geral para armazenar todos os exercícios que iremos resolver. Basta criar uma pasta com um nome apropriado, por exemplo:
                <div className="cada-image">
                    <img className="images-artigo" alt="Pasta" src="/images/pasta-artigo.png"/><br/><br/>
                </div>
Com a pasta criada, abrimos o VS Code dentro dela para dar início ao projeto. Dentro dessa pasta principal, criamos outras pastas, cada uma representando um exercício específico — isso ajuda a manter tudo mais organizado:
                <div className="cada-image">
                    <img className="images-artigo" alt="Dentro do Vscode" src="/images/vs-artigo.png"/><br/><br/>
                </div>
Agora, em cada pasta de exercício que formos resolver, devem existir dois arquivos: o arquivo <strong>stdin</strong>, que representa a entrada de dados do exercício (simulando a entrada via terminal), e o arquivo <strong>xxxx.js</strong>, cujo número corresponde ao do exercício e onde será escrita a solução em JavaScript. Ao final, como exemplo, a estrutura fica assim:</p>
                <div className="cada-image">
                    <img className="images-artigo" alt="Dentro do Vscode" src="/images/vs2-artigo.png"/><br/><br/>
                </div>
                <section ref={topicosRef.topico4}></section>
                <h3 className="titulo-paragrafo">4º Como Resolver</h3>
                <p className="texto-info">Vamos agora para a parte de como resolver os exercícios. No Beecrowd, acessamos o problema desejado e selecionamos a linguagem JavaScript. Em seguida, copiamos as duas primeiras linhas fornecidas pelo site (o que está em vermelho no print abaixo) — elas são responsáveis por permitir a leitura de dados via o arquivo stdin — e colamos no nosso arquivo.js.
                <div className="cada-image">
                    <img className="img-longa" alt="Problema no Beecrowd" src="/images/vs3-artigo.png"/><br/><br/>
                </div>
Depois, adaptamos a entrada para a nossa estrutura de pastas local, que é um pouco mais simples. Atenção: a cada novo exercício, esse trecho precisa ser ajustado para refletir corretamente o número/pasta do problema.
Na sequência, copiamos os dados de entrada fornecidos pelo exercício e colamos no arquivo stdin.
                <div className="cada-image">
                    <img className="img-longa" alt="No Vs Code" src="/images/vs4-artigo.png"/><br/><br/>
                </div>
Pronto! Com isso, a estrutura está completa: a entrada de dados funcionará normalmente, e podemos começar a resolver os exercícios.<br/><br/>
Lembre-se de que a tipagem em JavaScript é dinâmica. Isso significa que, quando o problema exigir um tipo de dado específico como int ou float, você precisará fazer a conversão explicitamente antes de utilizar os valores.<br/><br/>
Também é importante se atentar ao método array.split(), que será muito utilizado para processar corretamente a entrada dos exercícios.</p>
                <section ref={topicosRef.topico5}></section>
                <h3 className="titulo-paragrafo">5º Como Submeter</h3>
                <p className="texto-info">Ok! Agora vamos supor que você resolveu um exercício e quer submetê-lo no Beecrowd. É simples: copie o código do seu arquivo.js e cole na área de solução do problema, na página do Beecrowd.
Mas atenção! Existe um detalhe importante: deixe as duas primeiras linhas que já aparecem na área de código do Beecrowd e não copie as duas primeiras linhas do seu arquivo.
                <div className="cada-image">
                    <img className="img-longa" alt="Problema no Beecrowd" src="/images/vs5-artigo.png"/><br/><br/>
                </div>
O que está em vermelho não muda e o que está em amarelo é sua solução.<br/><br/>
Isso é necessário porque a entrada de dados no Beecrowd funciona apenas com o caminho de leitura que eles especificam. Ou seja, basta manter aquele trecho inicial fornecido por eles, e o restante do seu código funcionará normalmente.<br/><br/>
E pronto! Submeta seu exercício e veja se acertou😸.<br/><br/>
Para a resposta de alguns exercícios confira meu <a href="https://github.com/LensBalan/Exercicios-JS-Beecrowd" target="_blank" rel="noopener noreferrer">repositório com as soluções.</a></p>
            </div>
            </ScrollTela>
        </>
    );
}

export default ProblemasJS