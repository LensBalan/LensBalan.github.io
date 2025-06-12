import './css/Pagina404.css';
import { useNavigate } from 'react-router-dom';

function Pagina404 () {

    const navigate = useNavigate();

    return (
        <div className='pagina404'>
            <div className='div404'>
                <img className="img404" alt="Erro 404" src="/images/404.jpg"></img>
                <h1 className='fonte-titulos-404'>Você acessou um caminho inválido no site...</h1>
                <h2>Não há nada aqui.</h2>
                <h2>Volte para alguma das abas do site:</h2>
                <div className='buttons404'>
                    <button className='buttons' onClick={() => navigate('/')} >
                            <span className="transition"></span>
                            <span className="gradient"></span>
                            <span className="label">Página Principal</span> 
                    </button>
                    <button className='buttons' onClick={() => navigate('/blog')} >
                            <span className="transition"></span>
                            <span className="gradient"></span>
                            <span className="label">Meu Blog</span> 
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Pagina404