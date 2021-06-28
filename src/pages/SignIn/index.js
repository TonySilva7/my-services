import React, { useState } from 'react';
import { ReactComponent as Logo } from '../../assets/logo-dev-life-opt.svg';
import { ContainerCenter, LoginArea, LoginWrap } from "./styles";
import { Link } from "react-router-dom";

function SignIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          <h1>Entrar</h1>
          <input
            type="text"
            placeholder="Email"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
          />
          <input
            type="password"
            placeholder="Senha"
            value={ password }
            onChange={ (e) => setPassword(e.target.value) }
          />
          <button type="submit">Acessar</button>
        </form>

        <Link to="/register">Criar uma conta</Link>
      </LoginWrap>
    </ContainerCenter>
  );
}

export default SignIn;
