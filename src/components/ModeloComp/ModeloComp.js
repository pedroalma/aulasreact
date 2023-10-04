function ModeloComp(props , img ){
    return(
        <div className="teste">
            <h1>{props.titulo}</h1>
            <p>{props.para }</p>
            <img src={img.image} alt={props.titulo}/>
            <h3>{props.tes}</h3>
        </div>
    )
}

export default ModeloComp;