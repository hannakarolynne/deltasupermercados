import { useState } from "react";
import axios from "axios";
import "./FormLogin.css";
import Circulos from "../../assets/circulos.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function FormLogin() {

  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post("http://localhost:3001/auth/login", { email, password})
      const { token } = response.data ;

      localStorage.setItem("authToken", token);


      alert("Login realizado com sucesso!")

      navigate("/catalogo");

    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Erro ao fazer login!");
      console.error("Erro ao fazer login:", error.response?.data || error);
    }
  }

  return (
      <div className="form-login">
        <h2 className="text-bemvindo">Bem vindo</h2>

        <div className="div-form">

          <form onSubmit={handleLogin}>
            
            <h2 className="text-login">Login</h2>

            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <label htmlFor="email">Email:</label>
            <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu email"
          required/>

            <label htmlFor="password">Senha:</label>
            <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Digite sua senha"
          required/>

            <button className="btn-entrar" type="submit">Entrar</button>
          </form>

          <Link to="/register"><button className="btn-login" type="submit">Cadastrar</button></Link>
        </div>

        <div className="div-cirles">
          <img className="img-circles" src={Circulos} alt="Círculos coloridos"/>
        </div>

        <h2 className="text-frase">
          Temos o orgulho <br /> de receber você!
        </h2>
      </div>
  );
}

export default FormLogin;
