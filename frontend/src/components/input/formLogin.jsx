import "./formLogin.css";
const formEmail = 'Digite seu email'
const formSenha = 'Digite sua senha'
function FormLogin() {
    return (
        <>  
            <form>
                <div>
                    <label>E-mail</label>
                    <input placeholder={formEmail}/>
                </div>
                
                <div>
                    <label>Senha</label>
                    <input placehold={formSenha}/>
                
                </div>
                    <div class="group-31">  
                    <div class="rectangle-3"></div>
                    <img class="lock" src="lock0.png" />
                    <img class="eye" src="eye0.png" />
                </div>
            </form>
        </>
    )
}
export default FormLogin