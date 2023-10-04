/*import falconR from '../../images/R.jpg'
import falcon from '../../images/falcon 9.jpg'
import sls from '../../images/sls.jpg'
import starship from '../../images/starship.jpg'
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import ModeloComp from './components/ModeloComp/ModeloComp';
*/

import ExibePerfil from '../ExibePerfil/ExibePerfil';
import './Equipe.css'
function Equipe({a0 ,a1, a2 , a3 , c0 , c1 , c2 ,c3 , b0 , b1 ,b2 ,b3 ,Equipe}) {
  return (
    <div className='div-body'>
    <h1>foguetes</h1>
    <div className='div-exibe'>
      <ExibePerfil nome={a0} img={b0} caracteristica={c0}/>
      <ExibePerfil nome={a1} img={b1} caracteristica={c1}/>
      <ExibePerfil nome={a2} img={b2} caracteristica={c2}/>
      <ExibePerfil nome={a3} img={b3} caracteristica={c3}/>
    </div>
    </div>
  )
}

export default Equipe;