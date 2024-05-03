import Cabecalho from "./Componentes/Cabecalho";
import ConjuntoDeCards from "./Componentes/ConjuntoDeCards";
import Fundo from "./Componentes/Fundo";
import PageLogin from "./Componentes/PageLogin";

function App() {
  return (
    <div className="App">
      <Cabecalho/>
      <Fundo titulo="TODAS AS NOTÍCIAS DA CHINA EM PRIMEIRA MÃO!" texto="Para você que já é fâ da maior nação do mundo!! Cadastre-se já e receba as melhores notícias e +10000 social credit." valor="CADASTRAR"/>
      <ConjuntoDeCards h2="LÍDERES DA CHINA"/>
      <PageLogin/>
    </div>
  );
}

export default App;
