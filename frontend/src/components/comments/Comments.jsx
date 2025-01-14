import Produto from "../../assets/produto.png";
import "../comments/Comments.css";

function Comments() {
  return (
    <div className="component-comment">
      <div>
        <h1 className="title-page">COMENTE AQUI SOBRE O PRODUTO</h1>
      </div>

      <div className="conteudo-produto">
        <div className="div-produto">
          <img className="img-produto" src={Produto} alt="foto produto" />
        </div>

        <div className="info-produto">
          <h1>Salgadinho Batata Frita Pringles Churrasco 109g</h1>
          <h1 style={{ color: "red", opacity: 0.6, fontSize: "40px" }}>
            R$ 15,95
          </h1>
          <h1 style={{ fontSize: "40px" }}>R$ 14,35</h1>

          <div className="conteudo-avaliacao">
            <h5 className="starts">Stars</h5>
            <label className="descricao" for="comentario">
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
          <button>Enviar</button>
        </div>
      </div>
    </div>
  );
}

export default Comments;
