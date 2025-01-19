import "./Home.css";
import Logo from "../../assets/logo-delta.png";
import Banner from "../../assets/banner-delta.png";
import Marcas from "../../assets/Marcas.png";
import Ilustracao from "../../assets/shopping.png";
import Celular from "../../assets/phone.png";
import Loja from "../../assets/about.png";
import App from "../../assets/app.png";


function Home() {
    return (
       
      <div>
      {/* NAVBAR */}
      <nav class="navbar">
        <div class="logo"><img src={Logo} class="logo" /></div>
        <ul class="linkbar">
          <li><a href="#">Ofertas</a></li>
          <li><a href="#">Lojas</a></li>
          <Router><Link to="produtos">Produtos</Link></Router>
        </ul>

        <ul class="acess">
          <li><a href="#">Cadastrar</a></li>
          <li><a href="#">Entrar</a></li>
        </ul>
      </nav>

      {/*OPÇÕES*/}
      <div class="options">
        <ul class="options1">
          <li class="orange-text">Todos os corredores</li>
          <li>Ofertas da semana</li>
          <li>Limpeza</li>
          <li>Hortifruti</li>
          <li class="orange-text">Cartão Delta</li>
        </ul>
      </div>

      {/*BANNER*/}

      <div class="banner-home">
        
        <div><img class="img-banner" src={Banner}/></div>
      </div>

      {/*SOBRE*/}
      <div class="about">
        <div class="content-about">
          <h1 class="title-about">Sobre</h1>
          <p class="text-about">
            A Delta Supermercados Brasil é uma rede de varejo que oferece
            produtos de qualidade com preços acessíveis em todo o país. Com foco
            em conveniência e atendimento acolhedor, buscamos proporcionar uma
            experiência de compra prática e satisfatória. Investimos em inovação
            e sustentabilidade para um futuro responsável.
          </p>
          <p class="text-about">
            O sistema se destaca pela inovação tecnológica, com um sistema de estoque
            online que permite aos clientes acessar em tempo real a
            disponibilidade dos produtos. Isso garante uma compra mais ágil e
            reduz o risco de itens esgotados, além de otimizar a gestão do
            estoque. A tecnologia é um diferencial que proporciona uma
            experiência de compra mais eficiente e satisfatória.
          </p>
        </div>

        <div class="img-about"><img src={Loja}/></div>
      </div>

      {/*NOSSO FORNECEDORES*/}
      <div class="our-providers">
        <div class="container-providers">
          <h1 class="title-providers">Nossos fornecedores</h1>

        <div class="images">
          <div class="div-brand"><img class="img-brand" src={Marcas}/></div>
          <div class="div-shopping"><img class="img-shopping" src={Ilustracao}/></div>
        </div>
        </div>
      </div>
      {/*CONTATOS*/}
      <div class="div-phone"><img class="img-phone" src={Celular}/></div>
      <div class="contacts">

        <div class="content-contacts">
          <div class="canais-suporte">
            <h3>Canais de suporte</h3>
            <p>(00) 12345 - 6789</p>
            <p>atendimento@delta.com</p>
          </div>
          
          <div class="redes-sociais">
            <h3>Nossas redes sociais</h3>
            <p>@deltasupermercadosbr</p>
            <p>@deltasupermercadosln</p>
          </div>
        </div>
      </div>
      {/* FOOTER */}
      <div class="footer">
        <div class="footer-container">
          <div class="logo-footer"><img src={Logo} class="logo" /></div>        
        <ul class="links">
          <li>Ofertas</li>
          <li>Sobre Nós</li>
          <li>Nosso Sistema</li>
          <li>Política de Privacidade</li>
          <li>Termos de Uso</li>
        </ul>
        <div class="rodape-horarios">
          <h4>Atendimento:</h4>
          <p>Segunda a Sexta: 7h às 21h</p>
          <p>Sábado: 8h às 20h</p>
          <p>Domingo: 8h às 18h</p>
        </div>
        
        <div class="content-app">
          <h4>App Delta Supermercados</h4>
          <h6>Baixe agora!</h6>
          <div class="div-app"><img class="img-app" src={App}/></div>
        </div>
        
        </div>
        <p class="footer-delta">© 2024 Delta Supermercados Brasil - Todos os direitos reservados.</p>
      </div>
    </div>
      
)
}
export default Home