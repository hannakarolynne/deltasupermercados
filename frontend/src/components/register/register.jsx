import "./register.css";

function Register(){
    return(
      <div className="cadastro-produto">
      <h1 className="nome-formulario">Cadastre um novo produto</h1>
      <form className="form-produto">
        {/* Lado esquerdo */}
        <div className="lado-esquerdo">
          {/* Campo do título */}
          <div className="form-group">
            <label htmlFor="nome">Nome do produto (com descrição)</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Ex:NutriSnack - Castanha & Mel 50g"
            />
          </div>
          {/* Campo de upload */}
          <div className="form-group">
            <label>Insira uma imagem</label>
            <div className="upload-container">
              <div className="upload-placeholder">
                <p>Upload a file here</p>
              </div>
              <input type="file"  className="upload-input" />
            </div>
          </div>
        </div>

        {/* Lado direito */}
        <div className="lado-direito">
          <div className="form-group">
            <label htmlFor="preco">Preço</label>
            <input
            step="0.01" min="0"
              type="number"
              id="preco"
              name="preco"
              placeholder="Ex: R$ 1,99"
            />
          </div>
          <div className="form-group">
            <label htmlFor="categoria">Categoria</label>
            <select id="categoria" name="categoria">
              <option value="">Select</option>
              <option value="alimentos">Alimentos</option>
              <option value="bebidas">Bebidas</option>
              <option value="limpeza">Higiene</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="validade">Validade</label>
            <input type="date" id="validade" name="validade" />
          </div>

            {/* BOTÃO CADASTRAR */}
          <button type="submit" className="botao-cadastrar">
            CADASTRAR
          </button>
        </div>
      </form>
    </div>
    )
}export default Register