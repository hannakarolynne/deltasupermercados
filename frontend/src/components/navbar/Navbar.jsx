import Logo from "../../assets/logo.png";
import Filtro from "../../assets/icon-filtro.png";
import Carrinho from "../../assets/icon-carrinho.png";
import Menu from "../../assets/icon-menu.png";
import "../navbar/Navbar.css";

import {Link} from "react-router-dom";

function Navbar () {
  return (
    <header>
      <div className="div-logo">
      <Link to="/"><img src={Logo} className="img-logo" alt="Logo Delta Supermercados" /></Link>
      </div>

      <div className="pesquisa">
        <input type="text"placeholder="Busque produtos aqui"className="input-pesquisa"/>
        <button className="btn-pesquisa">
          
        </button>
      </div>

      <div className="opcoes">
      <Link to="novoproduto"><button className="botao-cadastro">Novo produto</button></Link>
      </div>
    </header>
  );
};

export default Navbar;
