import "./Navbar.css";

function Navbar() {
    return (
        <div class="navbar">

            <div class="options-navbar">
                <img class="logo" src="image-removebg-preview-10.png" />
                <div class="ofertas">Ofertas</div>
                <div class="trabalhe-conosco">Trabalhe conosco</div>
                <div class="produtos">Produtos</div>

            </div>
            <div class="sign-login">
                <div class="acessar">Acessar</div>
                <div class="cadastrar">Cadastrar</div>
            </div>
        </div>
    )
}

export default Navbar