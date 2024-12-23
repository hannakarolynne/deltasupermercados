import InputEmail, { InputPass } from "../input/input";
import "./FormSignup.css";
import Circulos from "../../assets/circulos.png";

function FormSignup() {
  return (
    // TODO FORMULÁRIO DE LOGIN
      <div className="form-login">
        <h2 className="text-bemvindo">Bem vindo</h2>

        <div class="div-form">
          <form action="#">
          <h2 className="text-login">Login</h2>
            <label for="email">Email:</label>
            <InputEmail/>
            <label for="password">Senha:</label>
            <InputPass/>
            <button class="btn-entrar" type="submit">
              Entrar
            </button>
            

          </form>
          <button class="btn-cadastrar">Cadastrar</button>
        </div>
        <div class="div-cirles">
          <img class="img-circles" src={Circulos} />
        </div>
        <h2 className="text-frase">
          Temos o orgulho <br /> de receber você!
        </h2>
      </div>
  );
}

export default FormSignup;
