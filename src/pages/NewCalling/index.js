import { useContext, useEffect, useState } from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from '../../components/Header';
import Title from '../../components/Title';
import { AuthContext } from '../../contexts/auth';
import firebase from '../../services/firebaseConnection';
import { Container } from '../Profile/styles';
import { Wrapper } from './styles';

export default function NewCalling () {

  const { user } = useContext(AuthContext);

  const { id } = useParams();
  const history = useHistory();

  const [ customers, setCustomers ] = useState([]);
  const [ customerSelected, setCustomerSelected ] = useState(0);
  const [ subject, setSubject ] = useState('Suporte');
  const [ status, setStatus ] = useState('Aberto');
  const [ complement, setComplement ] = useState('');

  const [ loadCustomers, setLoadCustomers ] = useState(false);
  const [ idCustomers, setIdCustomers ] = useState(false);

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

          if (id) {
            loadId(list);
          }

        })
        .catch((err) => {
          setLoadCustomers(false);
          setCustomers([ { id: '1', fantasyName: '' } ]);

          console.log(err);
          alert(err);
        });
    }

    loadCustomers().catch((err) => console.log(err));
  }, []);

  // carrega cliente a partir do id passado na URL
  async function loadId (list) {
    await firebase.firestore()
      .collection('calls')
      .doc(id)
      .get()
      .then((snapshot) => {
        setSubject(snapshot.data().subject);
        setStatus(snapshot.data().status);
        setComplement(snapshot.data().complement);

        let index = list.findIndex((client) => client.id === snapshot.data().clientId);
        setCustomerSelected(index);
        setIdCustomers(true);
      })
      .catch((err) => {
        console.log('Erro ao buscar ID: ' + err);
        setIdCustomers(false);
      });
  }

  // salva dados do form
  async function handleRegister (event) {
    event.preventDefault();

    if (idCustomers) {
      await firebase.firestore()
        .collection('calls')
        .doc(id)
        .update({
          client: customers[customerSelected].fantasyName,
          clientId: customers[customerSelected].id,
          subject: subject,
          status: status,
          complement: complement,
          userId: user.uid,
        })
        .then(() => {
          toast.success('Chamado editado com sucesso!');
          setCustomerSelected(0);
          setComplement('');
          history.push('/dashboard');
        })
        .catch((err) => {
          console.log(err);
        });

      return;
    }

    await firebase.firestore()
      .collection('calls')
      .add({
        created: new Date(),
        client: customers[customerSelected].fantasyName,
        clientId: customers[customerSelected].id,
        subject: subject,
        status: status,
        complement: complement,
        userId: user.uid,
      })
      .then(() => {
        toast.success('Chamado criado com sucesso!');
        setComplement('');
        setCustomerSelected(0);
        setSubject('Suporte');
      })
      .catch((err) => {
        toast.error('Ops, erro ao registrar');
        console.log(err);
      });

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
                <select name="name-client" id="name-client" value={ customerSelected }
                        onChange={ valueChangeCustomers }>
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
              value={ complement }
              name="complement"
              placeholder="Descreva seu problema (opcional)."
              id="complement"
              cols="30"
              rows="10"
              onChange={ (e) => setComplement(e.target.value) }
            />

            <button type="submit">Registrar</button>
          </form>
        </Wrapper>
      </Container>
    </>
  );
}