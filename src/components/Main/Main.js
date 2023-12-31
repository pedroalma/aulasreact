import ExibePerfil from '../ExibePerfil/ExibePerfil';
import NarutoPerfil from '../../images/narutoPerfil.webp';
import SasukePerfil from '../../images/sasukePerfil.webp';
import Sakura from '../../images/sakuraPerfil.webp';
import Kakashi from '../../images/kakashiPerfil.webp';
import falconR from '../../images/R.jpg'
import falcon from '../../images/falcon 9.jpg'
import R from '../../images/R.jpg'
import pcs from '../../images/programasul.jpg'
import starship from '../../images/starship.jpg'
import Equipe from '../Equipe/Equipe';
import './main.css';

function Main() {
    let caracKakashi = "Ele é conhecido por seu domínio em diversas técnicas ninja, sendo especialmente famoso por seu uso do Sharingan (um poderoso jutsu ocular) e por sua habilidade de copiar técnicas de outros ninjas.";
    let caracNaruto = "Ele possui uma habilidade única chamada Chakra da Kyuubi, que lhe confere grande poder. Além disso, ele é habilidoso em técnicas de clonagem e é famoso por sua técnica Rasengan";
    let caracSasuke = "Ele é um usuário talentoso do Sharingan e, mais tarde, desenvolve o Mangekyou Sharingan. Sasuke também se torna um mestre em técnicas de manipulação de raios, conhecidas como Raiton";
    let caracSakura = " Ela é altamente treinada em técnicas médicas e se destaca na manipulação de chakra para curar ferimentos. Além disso, ela desenvolve habilidades de combate notáveis";

    return(
        <main>
          <Equipe 
            a0="falcon" 
            b0={falcon}
            c0=" Altura: FT: 70 m (230 ft) v1.1: 68.4 m (224 ft) v1.0: 54.9 m (180 ft) Custo por lançamento (2023): $62M (2016), $50M (2018) Diâmetro: 3.7 m (12 ft) Estágios: 2 Função: Veículo de lançamento orbital Lançamentos totais: 111 Massa: v1.1: 505846 kg; v1.0:333400 kg"  
            a1="falcon heavy"
            b1={R}
            c1="elocidade máxima: 39.600 km/h Custo: 90 milhões USD (2018) Fabricante: SpaceX Altura: 70 m Função: Lançador orbital"
            a2="starhip"
            b2={starship}
            c2="Altura: 122 metro, 400 pé Fabricante: SpaceX Função: voo suborbital, voo orbital, viagem interplanetária Locais de lançamento: Starbase Launch Site, Kennedy Space Center Launch Complex 39A Massa: 5 000 tonelada, 11 000 000 libra"
            a3="Programa Cruzeiro do Sul"
            b3={pcs}
            c3="VLS-1 V02 foi o segundo voo do VLS-1 realizado no dia 11 de dezembro de 1999 a partir do Centro de Lançamento de Alcântara, tendo como objetivo o de colocar o microssatélite SACI-2 em órbita da Terra. O foguete foi destruído remotamente 3 minutos após o lançamento. O foguete, com 43 toneladas de combustível sólido, foi lançado no dia 11 de dezembro de 1999, as 16:40 (UTC-2), após dez minutos de atraso, com os quatro propulsores externos tendo funcionado corretamente, assim como os demais sistemas. Porém, foi remotamente destruído após 3m30s de missão devido ao segundo estágio não ter sido acionado. Os destroços caíram dentro da área interditada.
            O anúncio do fracasso só veio após 1h20m. Segundo a versão oficial, o Brigadeiro Tiago Ribeiro, responsável pelo anúncio, teria passado mal devido à emoção após o acidente."/>

          
        </main>
    )
}

export default Main;