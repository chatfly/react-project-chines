import './Fundo.css'

const Fundo = (props) => {
    return(
        <main className='PrincipalFundo'>
            <h1>{props.titulo}</h1>
            <p>{props.texto}</p>
            <input type="button" value={props.valor}/>
        </main>
    )
}

export default Fundo