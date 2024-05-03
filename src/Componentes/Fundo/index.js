import './Fundo.css'

const Fundo = (props) => {
    return(
        <main className='Principal'>
            <h1>{props.titulo}</h1>
            <p>{props.texto}</p>
            <input type="button" value={props.valor}/>
        </main>
    )
}

export default Fundo