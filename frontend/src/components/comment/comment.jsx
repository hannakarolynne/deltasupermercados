import Produto from "../../assets/produto.png";
import "../comment/comment.css";
import { Link } from "react-router-dom";

function Comment() {
  return (
    <div className="component-comment">
      <div>
        <h1 className="title-page">COMENTE AQUI SOBRE O PRODUTO</h1>
      </div>

      <div className="conteudo-produto">
        <div className="div-produto">
          <img
            className="img-produto"
            src={Produto}
            alt="Salgadinho Batata Frita Pringles Churrasco 109g"
          />
        </div>

        <div className="info-produto">
          <h1>Salgadinho Batata Frita Pringles Churrasco 109g</h1>

          <h1 className="h1-sempromo">R$ 15,95</h1>
          <h1 className="h1-promo">R$ 14,35</h1>

          <div className="conteudo-avaliacao">
            <h5 className="starts">Estrelas</h5>
            <label className="descricao" htmlFor="comentario">
              Comentário:
            </label>

            <textarea
              id="comentario"
              name="comentario"
              rows="10"
              cols="90"
              placeholder="Diga algo à respeito..."
            ></textarea>
          </div>

          <Link to="/detalhes">
            <button className="btn-enviar">Enviar</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Comment;