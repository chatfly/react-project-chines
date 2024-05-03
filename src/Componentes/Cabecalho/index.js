import "./Cabecalho.css";
import HeaderNav from "../HeaderNav";

const Cabecalho = () => {
    return (
        <div className="Cabecalho">
            <img src="/Imagens/logo.png" alt="#" className="img"/>
            <div className="header">
                <HeaderNav texto="HOME" />
                <HeaderNav texto="GALERIA" />
                <HeaderNav texto="CADASTRO" />
                <HeaderNav texto="CONTATO" />
            </div>
        </div>
    );
};

export default Cabecalho;
