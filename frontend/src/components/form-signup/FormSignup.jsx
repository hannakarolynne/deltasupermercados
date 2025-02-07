import { useState } from "react";
import "./FormSignup.css";
import Circulos from "../../assets/circulos.png";
import axios from "axios";
import { Link } from "react-router-dom";

function FormSignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/auth/register", { 
        name, 
        email, 
        password 
      });

      alert("Cadastro realizado com sucesso!");
      localStorage.setItem("authToken", response.data.token);
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message || "Erro ao cadastrar usuário!");
      } else {
        setErrorMessage("Erro ao conectar ao servidor!");
      }
    }
  };

  return (
    <div className="form-login">
      <h2 className="text-bemvindo">Bem-vindo</h2>

      <div className="div-form">
        <form onSubmit={handleSignup}>
          <h2 className="text-login">Cadastro</h2>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite seu nome"
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email"
            required
          />

          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha"
            required
          />

          <button className="btn-entrar" type="submit">
            Cadastrar
          </button>
        </form>

        <Link to="/login">
          <button className="btn-cadastrar" type="button">Login</button>
        </Link>
      </div>

      <div className="div-cirles">
        <img className="img-circles" src={Circulos} alt="Círculos coloridos" />
      </div>

      <h2 className="text-frase">
        Temos o orgulho <br /> de receber você!
      </h2>
    </div>
  );
}

export default FormSignup;
