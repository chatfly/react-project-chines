import Registro from '../Registro'
import './PageLogin.css'

function PageLogin(){
    return( // coisa coisada cadastre-se
        <div className='MainPage'>
            <div className='RegisterPG'>
                <Registro tituloCadastrar="CADASTRE-SE"/>
            </div>
            <div className='CountryBall'></div>
            <div className='SocialCredit'></div>
        </div>
    )
}

export default PageLogin