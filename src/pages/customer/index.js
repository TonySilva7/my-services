import { useState } from 'react';
import { FiUser } from 'react-icons/fi';
import Header from '../../components/Header';
import Title from '../../components/Title';
import { Container } from '../Profile/styles';
import { Wrapper } from './styles';

export function Customer () {

  const [ fantasyName, setFantasyName ] = useState('');
  const [ CNPJ, setCNPJ ] = useState('');
  const [ address, setAddress ] = useState('');


  function handleAdd (event) {
    event.preventDefault();
    alert('Clicou!');
  }

  return (
    <>
      <Header/>
      <Container>
        <Title name="Clientes">
          <FiUser size={ 25 }/>
        </Title>

        <Wrapper>
          <form onSubmit={ handleAdd }>
            <label htmlFor="name">Nome Fantasia:</label>
            <input
              type="text"
              name="name"
              placeholder="Nome da sua empresa..."
              value={ fantasyName }
              onChange={ (e) => setFantasyName(e.target.value) }
            />

            <label htmlFor="cpj">CNPJ:</label>
            <input
              type="text"
              name="npj"
              placeholder="CPJ da sua empresa..."
              value={ CNPJ }
              onChange={ (e) => setCNPJ(e.target.value) }
            />

            <label htmlFor="address">Endereço:</label>
            <input
              type="text"
              name="address"
              placeholder="Endereço da sua empresa..."
              value={ address } onChange={ (e) => setAddress(e.target.value) }
            />

            <button type="submit">Cadastrar</button>
          </form>
        </Wrapper>
      </Container>
    </>
  );
}