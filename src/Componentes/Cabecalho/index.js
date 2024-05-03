import "./Cabecalho.css";
import HeaderNav from "../HeaderNav";

const Cabecalho = () => {
    return (
        <div className="Cabecalho">
            <div className="imgCabecalho"></div>
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
