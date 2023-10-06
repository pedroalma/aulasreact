import './Frutas.css';
import ab from '../../images/ab.jpg'
import ax from '../../images/ax.jpg'
import au from '../../images/au.jpg'
import ac from '../../images/ac.jpg'
import aç from '../../images/aç.jpg'
import ar from '../../images/ar.jpg'
import ao from '../../images/ao.jpg'
function Frutas(){
    const dados = [
       {nome:"Abacate", calorias:160 ,img:ab},
       {nome:"Abacaxi", calorias:50, img:ax,},
       {nome:"Abiu", calorias:95,img:au},
       {nome:"Abricó", calorias:50,img:ac},
       {nome:"Abrunho", calorias:36,img:ao},
       {nome:"Açaí", calorias:60,img:aç},
       {nome:"Acerola", calorias:32,img:ar},
    ];
    return(
        <>
            {dados.map((dados) =>
            <p>
                <img src={dados.img} /><br/>
                Nome:{dados.nome}<br/>
                calorias{dados.calorias}<br/>
            </p>
            )}
        </>
    )
}
export default Frutas;