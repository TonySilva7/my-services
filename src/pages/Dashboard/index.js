import { useState } from 'react';
import { FiEdit2, FiMessageSquare, FiPlus, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Title from '../../components/Title';
import { Container } from '../Profile/styles';
import { Wrapper } from './styles';

export default function Dashboard () {

  const [ serviceCall, setServiceCall ] = useState([ 1 ]);

  return (
    <>
      <Header/>
      <Container>
        <Title name="Atendimento">
          <FiMessageSquare size={ 25 }/>
        </Title>

        <Wrapper>
          { serviceCall.length === 0
            ? (
              <>
                <span>Nenhum chamado registrado...</span>

                <Link to="/new">
                  <FiPlus size={ 25 }/>
                  Novo Chamado
                </Link>
              </>
            )
            : (
              <>
                <Link to="/new-calling">
                  <FiPlus size={ 25 }/>
                  Novo Chamado
                </Link>
                <table>
                  <thead>
                  <tr>
                    <th scope="col">Cliente</th>
                    <th scope="col">Assunto</th>
                    <th scope="col">Status</th>
                    <th scope="col">Cadastrado em</th>
                    <th scope="col">#</th>
                  </tr>
                  </thead>

                  <tbody>
                  <tr>
                    <td data-label="Cliente">DevLife</td>
                    <td data-label="Assunto">Suporte</td>
                    <td data-label="Status">
                      <span style={ { backgroundColor: '#5cb85c' } }>Em aberto</span>
                    </td>
                    <td data-label="Cadastrado">20/06/2021</td>
                    <td data-label="#">
                      <button style={ { backgroundColor: '#3583f6' } }>
                        <FiSearch color="#FFF" size={ 17 }/>
                      </button>
                      <button style={ { backgroundColor: '#f6a935' } }>
                        <FiEdit2 color="#FFF" size={ 17 }/>
                      </button>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </>
            )
          }

        </Wrapper>
      </Container>
    </>
  );
}