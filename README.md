# SuperSelect - Delta Supermercados

O sistema Delta Supermercados é uma solução para o gerenciamento de usuários, produtos e comentários em supermercados. Com controle de acesso por meio de login e cadastro, o sistema permitirá a administração de um catálogo de produtos, exibindo informações como imagem, nome, descrição, validade, preço e categoria. Além disso, os usuários poderão enviar comentários específicos para cada produto, com o histórico registrado, incluindo data e hora, proporcionando um acompanhamento detalhado e organizado de todas as interações e informações dos itens.

<div align="center">
    <img src="../deltasupermercados/frontend/src/assets/projeto-superselect.png" alt="Logo do Projeto" width="500">
</div>

## Acesso ao Projeto

### 1. Clonando o Repositório
Para acessar o projeto localmente, siga os passos abaixo:

1. Crie uma pasta onde deseja armazenar o projeto.
2. Abra o Visual Studio Code e acesse a pasta criada.
3. No terminal do VS Code (recomenda-se o **PowerShell**), execute o seguinte comando para clonar o repositório:
   ```sh
   git clone "URL_DO_REPOSITORIO"
   ```
4. Acesse o diretório do frontend:
   ```sh
   cd frontend/
   ```

### 2. Instalando as Dependências do Frontend
Para instalar as dependências necessárias do frontend, execute o seguinte comando:
```sh
npm install
```
Caso queira visualizar as dependências do projeto, você pode:
- Rodar o comando:
  ```sh
  npm list --depth=0
  ```
- Ou acessar o arquivo `package.json` e verificar a seção `dependencies`.

Principais dependências utilizadas no frontend:
- `react-router-dom` → Responsável pela navegação entre páginas.
- `axios` → Utilizado para realizar requisições HTTP baseadas em Promises.

Para instalar essas dependências individualmente, utilize o comando:
```sh
npm install react-router-dom axios
```

### 3. Instalando as Dependências do Backend
1. Retorne para o diretório principal do projeto:
   ```sh
   cd ../backend
   ```
2. Para visualizar as dependências do backend, utilize:
   ```sh
   npm list --depth=0
   ```
3. Instale as dependências do backend executando:
   ```sh
   npm install mysql2 jsonwebtoken express cors dotenv bcrypt
   ```

### 4. Configuração do Banco de Dados
Para configurar o banco de dados localmente, siga os passos abaixo:

1. Instale o [XAMPP](https://www.apachefriends.org/index.html) em sua máquina.
2. Inicie o **MySQL** e o **Apache** no painel do XAMPP.
3. Instale o MySQL Workbench e, durante a instalação, defina a senha do usuário root como **"admin"**.
4. Abra o MySQL Workbench e crie uma nova conexão:
   - Nome da conexão: `superselect`
   - Senha: **admin**
   - Confirme clicando em **OK** e acesse a conexão criada.
5. No MySQL Workbench:
   - Copie o código SQL disponível no projeto e cole em um novo script.
   - As **duas últimas linhas do código** devem ser copiadas para um novo arquivo Query (atalho: `Ctrl + Shift + T`).
   - Execute o script pressionando `Ctrl + Enter`.

### 5. Testando a Conexão do Backend
1. No backend, descomente a linha de código responsável pela conexão no arquivo `config/db.js`.
2. No terminal, execute o backend com:
   ```sh
   node app.js
   ```
3. Se tudo estiver correto, a saída esperada no terminal será:
   ```
   Servidor rodando na porta 3001
   Conexão com o banco de dados concluída com sucesso
   ```

Caso encontre algum erro durante a instalação ou execução do projeto, recomenda-se pesquisar a mensagem de erro para encontrar a solução adequada.

---