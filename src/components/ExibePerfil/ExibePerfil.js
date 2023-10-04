import Equipe from '../Equipe/Equipe';
import './exibePerfil.css';

function ExibePerfil({nome, img, caracteristica, Equipe }){
    return(
        <div>
            <img className="img-exibe-perfil" src={img} alt={nome}/>
            <h1>{Equipe}</h1>
            <h3> {nome}</h3>
            <p>caracteristica: {caracteristica}</p>
        </div>
    )
}

export default ExibePerfil;