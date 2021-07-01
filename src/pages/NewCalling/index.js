import { useContext, useEffect, useState } from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import Header from '../../components/Header';
import Title from '../../components/Title';
import { AuthContext } from '../../contexts/auth';
import firebase from '../../services/firebaseConnection';
import { Container } from '../Profile/styles';
import { Wrapper } from './styles';

export default function NewCalling () {

  const { user } = useContext(AuthContext);

  const [ customers, setCustomers ] = useState([]);
  const [ customerSelected, setCustomerSelected ] = useState(0);
  const [ subject, setSubject ] = useState('Suporte');
  const [ status, setStatus ] = useState('Aberto');
  const [ textArea, setTextArea ] = useState('');

  const [ loadCustomers, setLoadCustomers ] = useState(false);

  useEffect(() => {
    async function loadCustomers () {
      setLoadCustomers(true);
      await firebase.firestore()
        .collection('customers')
        .get()
        .then((snapshot) => {
          let list = [];

          snapshot.forEach((doc) => {
            list.push({
              id: doc.id,
              fantasyName: doc.data().fantasyName,
            });
          });

          if (list.length === 0) {
            console.info('Nenhuma Empresa Encontrada');
            setCustomers([ { id: '1', fantasyName: 'FREEELA' } ]);
            setLoadCustomers(false);
            return;
          }

          setCustomers(list);
          setLoadCustomers(false);

        })
        .catch((err) => {
          setLoadCustomers(false);
          setCustomers([ { id: '1', fantasyName: '' } ]);

          console.log(err);
          alert(err);
        });
    }

    loadCustomers()
      .then(() => console.log(''));
  }, []);

  function handleRegister (event) {
    event.preventDefault();

  }

  // troca assunto
  function handleChangeSelect (event) {
    setSubject(event.target.value);
  }

  // troca status
  function handleOptionChange (event) {
    setStatus(event.target.value);
  }

  // troca cliente
  function valueChangeCustomers (event) {
    setCustomerSelected(event.target.value);
    console.log(customers[event.target.value]);
  }

  return (
    <>
      <Header/>
      <Container>
        <Title name="Atendimento">
          <FiPlusCircle size={ 30 }/>
        </Title>

        <Wrapper>
          <form onSubmit={ handleRegister }>
            <label htmlFor="name-client">Cliente:</label>
            { loadCustomers
              ? (
                <input type="text" disabled={ true } value="Carregando cliente..."/>
              )
              : (
                <select name="name-client" id="name-client" value={ customerSelected } onChange={ valueChangeCustomers }>
                  {
                    customers.map((item, index) => {
                      return (
                        <option key={ item.id } value={ index }>{ item.fantasyName }</option>
                      );
                    })
                  }
                </select>
              )
            }

            <label htmlFor="subject">Assunto:</label>
            <select name="subject" id="subject" value={ subject } onChange={ handleChangeSelect }>
              <option key={ 1 } value="Suporte">Suporte</option>
              <option key={ 2 } value="Visita Técnica">Visita Técnica</option>
              <option key={ 3 } value="Financeiro">Financeiro</option>
            </select>

            <label htmlFor="radio">Status:</label>
            <div>
              <input
                type="radio"
                name="radio" value="Aberto"
                onChange={ handleOptionChange }
                checked={ status === 'Aberto' }
              />
              <span>Aberto</span>

              <input
                type="radio"
                name="radio"
                value="Progresso"
                onChange={ handleOptionChange }
                checked={ status === 'Progresso' }
              />
              <span>Progresso</span>

              <input
                type="radio"
                name="radio"
                value="Finalizado"
                onChange={ handleOptionChange }
                checked={ status === 'Finalizado' }
              />
              <span>Finalizado</span>
            </div>

            <label htmlFor="complement">Complemento:</label>
            <textarea
              type="text"
              value={ textArea }
              name="complement"
              placeholder="Descreva seu problema (opcional)."
              id="complement"
              cols="30"
              rows="10"
              onChange={ (e) => setTextArea(e.target.value) }
            />

            <button type="submit">Registrar</button>
          </form>
        </Wrapper>
      </Container>
    </>
  );
}