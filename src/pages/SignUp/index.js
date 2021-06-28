import React, { useState } from 'react';
import { ContainerCenter, LoginArea, LoginWrap } from "../SignIn/styles";
import { ReactComponent as Logo } from "../../assets/logo-dev-life-opt.svg";
import { Link } from "react-router-dom";

function SignUp() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert("Clicou!!!")
  }

  return (
    <ContainerCenter>
      <LoginWrap>
        <LoginArea>
          <Logo alt="Sistema Logo"></Logo>
        </LoginArea>

        <form onSubmit={ handleSubmit }>
          <h1>Cadastrar</h1>
          <input
            type="text"
            placeholder="Nome..."
            value={ name }
            onChange={ (e) => setName(e.target.value) }
          />
          <input
            type="text"
            placeholder="Email..."
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
          />
          <input
            type="password"
            placeholder="Senha..."
            value={ password }
            onChange={ (e) => setPassword(e.target.value) }
          />
          <button type="submit">Cadastrar</button>
        </form>

        <Link to="/">Já tem uma conta? Entre</Link>
      </LoginWrap>
    </ContainerCenter>
  );
}

export default SignUp;
