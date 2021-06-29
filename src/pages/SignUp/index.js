import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo-dev-life-opt.svg";
import { ContainerCenter, LoginArea, LoginWrap } from "../SignIn/styles";
import { AuthContext } from '../../contexts/auth';

function SignUp () {

  const { signUp, loadingAuth } = useContext(AuthContext);

  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  function handleSubmit (event) {
    event.preventDefault();

    if (name !== '' && email !== '' && password !== '') {
      signUp(name, email, password);
    }
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
          <button type="submit">{ loadingAuth ? 'Carregando...' : 'Cadastrar' }</button>
        </form>

        <Link to="/">Já tem uma conta? Entre</Link>
      </LoginWrap>
    </ContainerCenter>
  );
}

export default SignUp;
