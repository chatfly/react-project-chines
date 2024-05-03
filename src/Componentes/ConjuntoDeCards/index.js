import './ConjuntoDeCards.css'

function ConjuntoDeCards(props){
    return(
        <div className='PrincipalCards'>
            <h2>{props.h2}</h2>
            <div className='DivCards'>
                <div className='Foto1'></div>
                <div className='Foto2'></div>
                <div className='Foto3'></div>
                <a href="#">VER MAIS</a>
            </div>
        </div>
    )
}

export default ConjuntoDeCards