function InputEmail() {
  return (
      <div>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Seu email"
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
          placeholder="Sua senha"
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
          placeholder="Seu nome"
          required/>
      </div>
  );
}