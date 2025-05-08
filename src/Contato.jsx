function Contato(){
    return (
        <>
            <div className="div-contato">
                <h3 className="sub-titulos">Contate-me</h3>
            </div>
            <div className="div-contato-images">
                <a href="https://www.linkedin.com/in/leonardo-balan" target="_blank">
                    <img alt="Meu Linkedin" src="/src/assets/linkedin.png" className="icon"></img>
                </a>
                <a href="/src/assets/Currículo.pdf" target="_blank">
                    <button className='buttons'>
                    <span class="transition"></span>
                    <span class="gradient"></span>
                    <span class="label">Meu Currículo</span> 
                    </button>
                </a>
                <a href="https://www.instagram.com/lens.balan" target="_blank">
                    <img alt="Meu instagram" src="/src/assets/instagram.png" className="icon"></img>
                </a>
            </div>
        </>
    );
}

export default Contato