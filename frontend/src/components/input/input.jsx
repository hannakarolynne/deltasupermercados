function InputEmail() {
  return (
      <div>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu email"
          required/>
      </div>
    

  );
}

export default InputEmail;

export function InputPass() {
  return (
      <div>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Digite sua senha"
          required/>
      </div>
  );
}

export function InputName() {
  return (
      <div>
        <input
          type="name"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={nome}
          placeholder="Digite seu nome"
          required/>
      </div>
  );
}