import "./Card.css";
import {Link } from "react-router-dom";


function Card() {
  return (
    <Link to="/detalhes">
    <div className="item-container">
      <div className="rectangle"></div>
      <img className="image" src="https://a-static.mlcdn.com.br/800x560/desodorante-antitranspirante-aerosol-rexona-men-clinical-clean-150ml/magazineluiza/224500700/d7851c6512d443c64cf1c2b100a115bb.jpg" alt="Desodorante Rexona" />
      <div className="description text-left font-regular">Desodorante Rexona Active...</div>
      <div className="price text font-extrabold">R$ 11,20</div>
      <img className="icon icon-edit" src="https://img.icons8.com/?size=100&id=59856&format=png&color=000000" alt="Editar" />
      <img className="icon icon-delete" src="https://img.icons8.com/?size=100&id=11650&format=png&color=000000" alt="Excluir" />
    </div>
    </Link>
  );
}

export default Card;
