function Testlist(){
      const dados = [
         {nome:"Maria ", idade: 45 , altura:1.55 },
         {nome:"João",idade:17,altura:1.87},
         {nome:"Joana",idade:15 , altura:1.60}
      ];
    return(
     <>
        {dados.map((dados) =>
        <p>
        Nome: {dados.nome}<br/>
        idade: {dados.idade}<br/>
        altura: {dados.altura}<br/>
        </p>
        )}
     </>
    )
}
export default Testlist;