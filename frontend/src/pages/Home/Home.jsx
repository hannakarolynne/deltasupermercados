import "./Home.css";
import Logo from "../../assets/logo-delta.png";
import Banner from "../../assets/banner-delta.png";
import Marcas from "../../assets/Marcas.png";
import Ilustracao from "../../assets/shopping.png";
import Celular from "../../assets/phone.png";
import Loja from "../../assets/about.png";
import App from "../../assets/app.png";
import {Link } from "react-router-dom";


function Home() {
    return (
       
      <div>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo"><img src={Logo} className="logo" /></div>
        <ul className="linkbar">
          <li><a href="#">Ofertas</a></li>
          <li><a href="#">Lojas</a></li>
          <li><Link to="/catalogo" >Produtos</Link></li>
          
        </ul>

        <ul className="acess">
          <li><Link to="/register">Cadastrar</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>

      {/*OPÇÕES*/}
      <div className="options">
        <ul className="options1">
          <li className="orange-text">Todos os corredores</li>
          <li>Ofertas da semana</li>
          <li>Limpeza</li>
          <li>Hortifruti</li>
          <li className="orange-text">Cartão Delta</li>
        </ul>
      </div>

      {/*BANNER*/}

      <div className="banner-home">
        
        <div><img className="img-banner" src={Banner}/></div>
      </div>

      {/*SOBRE*/}
      <div className="about">
        <div className="content-about">
          <h1 className="title-about">Sobre</h1>
          <p className="text-about">
            A Delta Supermercados Brasil é uma rede de varejo que oferece
            produtos de qualidade com preços acessíveis em todo o país. Com foco
            em conveniência e atendimento acolhedor, buscamos proporcionar uma
            experiência de compra prática e satisfatória. Investimos em inovação
            e sustentabilidade para um futuro responsável.
          </p>
          <p className="text-about">
            O sistema se destaca pela inovação tecnológica, com um sistema de estoque
            online que permite aos clientes acessar em tempo real a
            disponibilidade dos produtos. Isso garante uma compra mais ágil e
            reduz o risco de itens esgotados, além de otimizar a gestão do
            estoque. A tecnologia é um diferencial que proporciona uma
            experiência de compra mais eficiente e satisfatória.
          </p>
        </div>

        <div className="img-about"><img src={Loja}/></div>
      </div>

      {/*NOSSO FORNECEDORES*/}
      <div className="our-providers">
        <div className="container-providers">
          <h1 className="title-providers">Nossos fornecedores</h1>

        <div className="images">
          <div className="div-brand"><img className="img-brand" src={Marcas}/></div>
          <div className="div-shopping"><img className="img-shopping" src={Ilustracao}/></div>
        </div>
        </div>
      </div>
      {/*CONTATOS*/}
      <div className="div-phone"><img className="img-phone" src={Celular}/></div>
      <div className="contacts">

        <div className="content-contacts">
          <div className="canais-suporte">
            <h3>Canais de suporte</h3>
            <p>(00) 12345 - 6789</p>
            <p>atendimento@delta.com</p>
          </div>
          
          <div className="redes-sociais">
            <h3>Nossas redes sociais</h3>
            <p>@deltasupermercadosbr</p>
            <p>@deltasupermercadosln</p>
          </div>
        </div>
      </div>
      {/* FOOTER */}
      <div className="footer">
        <div className="footer-container">
          <div className="logo-footer"><img src={Logo} className="logo" /></div>        
        <ul className="links">
          <li>Ofertas</li>
          <li>Sobre Nós</li>
          <li>Nosso Sistema</li>
          <li>Política de Privacidade</li>
          <li>Termos de Uso</li>
        </ul>
        <div className="rodape-horarios">
          <h4>Atendimento:</h4>
          <p>Segunda a Sexta: 7h às 21h</p>
          <p>Sábado: 8h às 20h</p>
          <p>Domingo: 8h às 18h</p>
        </div>
        
        <div className="content-app">
          <h4>App Delta Supermercados</h4>
          <h6>Baixe agora!</h6>
          <div className="div-app"><img className="img-app" src={App}/></div>
        </div>
        
        </div>
        <p className="footer-delta">© 2024 Delta Supermercados Brasil - Todos os direitos reservados.</p>
      </div>
    </div>
      
)
}
export default Home