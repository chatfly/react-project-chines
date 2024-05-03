import './Registro.css'

function Registro(props){
    return(
        <div className='RegistroPage'>
            <h2>{props.tituloCadastrar}</h2>
            <input type='text' placeholder='exemplo@email.com.br' className='email'/>
            <input type='password' placeholder='Senha' className='pass'/>
            <button className='botao'>CONCLUIR</button>
        </div>
    )
}

export default Registro