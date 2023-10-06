import falcon from '../../images/falcon 9.jpg'
import R from '../../images/R.jpg'
import pcs from '../../images/programasul.jpg'
import starship from '../../images/starship.jpg'
import ExibePerfil from '../ExibePerfil/ExibePerfil'
function Equipe(){
    const f =[
        {img:falcon ,nome:"Falcon",crt:"Altura: FT: 70 m (230 ft) v1.1: 68.4 m (224 ft) v1.0: 54.9 m (180 ft) Custo por lançamento (2023): $62M (2016), $50M (2018) Diâmetro: 3.7 m (12 ft) Estágios: 2 Função: Veículo de lançamento orbital Lançamentos totais: 111 Massa: v1.1: 505846 kg; v1.0:333400 kg",},
        {img:R ,nome:"Falcon heavy",crt:"elocidade máxima: 39.600 km/h Custo: 90 milhões USD (2018) Fabricante: SpaceX Altura: 70 m Função: Lançador orbital",},
        {img:pcs ,nome:"Starhip",crt:"Altura: 122 metro, 400 pé Fabricante: SpaceX Função: voo suborbital, voo orbital, viagem interplanetária Locais de lançamento: Starbase Launch Site, Kennedy Space Center Launch Complex 39A Massa: 5 000 tonelada, 11 000 000 libra",},
        {img:starship ,nome:"Programa Cruzeiro do Sul",crt:"VLS-1 V02 foi o segundo voo do VLS-1 realizado no dia 11 de dezembro de 1999 a partir do Centro de Lançamento de Alcântara, tendo como objetivo o de colocar o microssatélite SACI-2 em órbita da Terra. O foguete foi destruído remotamente 3 minutos após o lançamento. O foguete, com 43 toneladas de combustível sólido, foi lançado no dia 11 de dezembro de 1999, as 16:40 (UTC-2), após dez minutos de atraso, com os quatro propulsores externos tendo funcionado corretamente, assim como os demais sistemas. Porém, foi remotamente destruído após 3m30s de missão devido ao segundo estágio não ter sido acionado. Os destroços caíram dentro da área interditada.O anúncio do fracasso só veio após 1h20m. Segundo a versão oficial, o Brigadeiro Tiago Ribeiro, responsável pelo anúncio, teria passado mal devido à emoção após o acidente.",},
    ]
    return(
       <>
        <h1>Equipe foquetes</h1>
        <div className='exibe'>
          {f.map((f) =>
          <div>
          <ExibePerfil nome={f.nome} img={f.img} crt={f.crt}/>
          <ExibePerfil nome={f.nome} img={f.img} crt={f.crt}/>
          <ExibePerfil nome={f.nome} img={f.img} crt={f.crt}/>
          </div>
          )}
        </div>
       </>
    )
}
export default Equipe;