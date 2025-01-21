import "./Details.css";
import Produto from "../../assets/produto.png";
import Estrelas from "../../assets/cinco-estrelas.png";
import Navbar from "../../components/navbar/Navbar";
import {Link } from "react-router-dom";

function Details() {
    return (
        <div class="div-detalhes">

            {/*NAVBAR DE CATÁLOGO E DETALHES  */}
            <Navbar/>

            {/* ÁREA PRINCIPAL */}
            <main>
                {/* INFORMAÇÕES INICIAIS DO PRODUTO */}
                <div className="info-prod">
                    {/* IMAGENS DO PRODUTO */}
                    <div className="div-produto"><img className="img-produto" src={Produto} alt="foto produto" /></div>

                    {/* LATERAL DO PRODUTO */}
                    <div className="conteudo-prod">
                        <h1>
                            Salgadinho Batata Frita Pringles Churrasco 109g
                        </h1>
                        <div className="stars-stock">
                            <img style={{ height: '30px' }} src={Estrelas} className="img-estrelas"></img>
                            <h3 style={{ fontWeight: "700", color: 'rgb(53, 53, 53)' }}>Em estoque</h3>
                        </div>
                        
                        <h1 style={{ fontSize: "40px" }} >R$ 14,35</h1>
                        <button className="btn">Comprar</button>
                    </div>
                </div>
                {/* DESCRIÇÃO DO PRODUTO */}
                <div className="descricao">
                    <h1>Descrição</h1>
                    <p className="texto-descricao" style={{ textAlign: 'justify', }}>O salgadinho Batata Frita Pringles®, vem em sua icônica lata para proporcionar uma experiência incomparável. É o salgadinho que foi feito para você! Com suas batatas que encaixam perfeitamente na sua língua, e que te surpreende a cada mordida com uma crocância incomparável e um sabor único. Pringles® é autêntica, divertida e surpreendente. Suas batatas perfeitamente empilhadas, te permitem levá-las para todos os lugares. Em meio à correria do dia a dia, ele é uma pausa merecida, um momento de relaxamento que revigora e renova suas energias. Mas também ideal para dividir com a galera, e tornar todos os encontros mais especiais. Para os apaixonados por Churrasco, um salgadinho com sabor que dá água na boca! Desfrute deste salgadinho na versão Churrasco ou explore os sabores Original, Creme e Cebola,  Queijo e Cheddar e Bacon. Este snack é perfeito para qualquer ocasião. Dê um pop na sua mente com Pringles®!</p>
                </div>
                {/* AVALIAÇÕES */}
                <div className="avaliacoes">
                    <h1>Avaliações</h1>

                    {/* PAINEL DE AVALIAÇÕES */}
                    <div className="main-avaliacoes">
                        <div className="numeros">
                            <img style={{ height: '30px' }} src={Estrelas} className="img-estrelas"></img>
                            <h2>Comentários: 0</h2>
                            <Link to="/avaliacao"><button className="btn">Avaliar</button></Link>
                        </div>
                        {/* COMENTÁRIOS */}
                        <div style={{ fontSize: "30px" }} className="comentarios">
                            <h3>Dono da Loja comentou:</h3>
                            <h4 style={{ fontWeight: 'lighter' }}>Amei ❤️, comprem. Nota 10000</h4>
                            <img style={{ height: '30px' }} src={Estrelas} className="img-estrelas"></img>
                            <h3>Curtidas: <span style={{fontWeight:'lighter'}}>1</span><span></span></h3>
                        </div>
                    </div>
                </div>
            </main>
            
        </div>
    )
} export default Details