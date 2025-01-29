import { useState } from "react";
import axios from "axios";
import InputEmail, { InputName, InputPass } from "../input/input";
import "./FormLogin.css";
import Circulos from "../../assets/circulos.png";

function FormLogin() {

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post("http://localhost:3001/login", { email, password, nome })
      const { token } = response.data 

      // Salvando o token no localStorage para autenticação
      localStorage.setItem("authToken", token)


      //Redirecionar ou exibir uma mensagem de sucesso
      alert("Login realizado com sucesso!")
    } catch (error) {
      setErrorMessage("Erro: usuário ou senha inválidos!")
      console.error("Erro ao fazer login:", error)
    }
  }

  return (
      <div className="form-login">
        <h2 className="text-bemvindo">Bem vindo</h2>

        <div class="div-form">

          <form onSubmit={handleLogin}>
            
            <h2 className="text-login">Login</h2>

            <label htmlFor="name">Nome:</label>
            <InputName />

            <label htmlFor="email">Email:</label>
            <InputEmail/>

            <label for="password">Senha:</label>
            <InputPass/>

            <button class="btn-entrar" type="submit">Entrar</button>
          </form>

          <button class="btn-login" type="submit">Login</button>
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

export default FormLogin;
