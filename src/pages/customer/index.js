import { useState } from 'react';
import { FiUser } from 'react-icons/fi';
import { toast } from 'react-toastify';
import Header from '../../components/Header';
import Title from '../../components/Title';
import firebase from '../../services/firebaseConnection';
import { Container, ContentProfile } from '../Profile/styles';

export function Customer () {

  const [ fantasyName, setFantasyName ] = useState('');
  const [ CNPJ, setCNPJ ] = useState('');
  const [ address, setAddress ] = useState('');


  async function handleAdd (event) {
    event.preventDefault();

    if (fantasyName !== '' && CNPJ !== '' && address !== '') {
      await firebase.firestore()
        .collection('customers')
        .add({
          fantasyName: fantasyName,
          cnpj: CNPJ,
          address: address,
        })
        .then(() => {
          setFantasyName('');
          setCNPJ('');
          setAddress('');
          toast.info('Cadastro realizado com sucesso!');
        })
        .catch((err) => {
          console.log(err);
          toast.error('Ocorreu um erro!');
        });
    } else {
      toast.error('Preencha todos os campos!');
    }
  }

  return (
    <>
      <Header/>
      <Container>
        <Title name="Clientes">
          <FiUser size={ 25 }/>
        </Title>

        <ContentProfile>
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
        </ContentProfile>
      </Container>
    </>
  );
}