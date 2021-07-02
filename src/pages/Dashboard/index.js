import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { FiEdit2, FiMessageSquare, FiPlus, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Modal from '../../components/Modal';
import Title from '../../components/Title';
import firebase from '../../services/firebaseConnection';
import { Container } from '../Profile/styles';
import { Wrapper } from './styles';

export default function Dashboard () {

  const [ calls, setCalls ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ loadingMore, setLoadingMore ] = useState(false);
  const [ isEmpty, setIsEmpty ] = useState(false);
  const [ lastDoc, setLastDoc ] = useState();

  const [ showPostModal, setShowPostModal ] = useState(false); //>>>> Mude Para o padrão FALSE <<<<
  const [ detail, setDetail ] = useState();

  useEffect(() => {

    async function getCalls () {
      await firebase.firestore()
        .collection('calls')
        .orderBy('created', 'desc')
        .limit(5)
        .get()
        .then((snapshot) => {
          updateState(snapshot);
        })
        .catch((err) => {
          console.log(err);
          setLoadingMore(false);
        });
      setLoading(false);
    }

    getCalls().catch((e) => console.log(e));

    return () => {
    };
  }, []);

  async function updateState (snapshot) {
    const isCollectionEmpty = snapshot.size === 0;

    if ( !isCollectionEmpty) {
      let list = [];

      snapshot.forEach((doc) => {
        list.push({
          id: doc.id,
          subject: doc.data().subject,
          client: doc.data().client,
          clientId: doc.data().clientId,
          created: doc.data().created,
          createdFormat: format(doc.data().created.toDate(), 'dd/MM/yyyy'),
          status: doc.data().status,
          compliment: doc.data().compliment,
        });
      });

      // pega o último elemento carregado
      let myLastDoc = snapshot.docs[snapshot.docs.length - 1];
      setCalls((calls) => [ ...calls, ...list ]);
      setLastDoc(myLastDoc);
    } else {
      setIsEmpty(true);
    }

    setLoadingMore(false);
  }

  async function handleMore () {
    setLoadingMore(true);
    await firebase.firestore()
      .collection('calls')
      .orderBy('created', 'desc')
      .startAfter(lastDoc)
      .limit(5)
      .get()
      .then((snapshot) => {
        updateState(snapshot);
      });
  }

  function togglePostModal (item) {
    console.log(item);
    setShowPostModal( !showPostModal);
    setDetail(item);
  }

  if (loading) {
    return (
      <div>
        <Header/>
        <Container>
          <Title name="Atendimento">
            <FiMessageSquare size={ 25 }/>
          </Title>
        </Container>

        <Wrapper>
          <span> Buscando chamados... </span>
        </Wrapper>
      </div>
    );
  }

  return (
    <>
      <Header/>

      <Container>
        <Title name="Atendimento">
          <FiMessageSquare size={ 25 }/>
        </Title>

        <Wrapper>
          { calls.length === 0
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
                  { calls.map((item, index) => {
                    return (
                      <tr key={ index }>
                        <td data-label="Cliente">{ item.client }</td>
                        <td data-label="Assunto">{ item.subject }</td>
                        <td data-label="Status">
                          <span style={ {
                            backgroundColor: item.status === 'Aberto' ? '#5cb85c' : '#999',
                            width: 85,
                            textAlign: 'center'
                          } }>
                            { item.status }
                          </span>
                        </td>
                        <td data-label="Cadastrado">{ item.createdFormat }</td>
                        <td data-label="#">
                          <button style={ { backgroundColor: '#3583f6' } } onClick={ () => togglePostModal(item) }>
                            <FiSearch color="#FFF" size={ 17 }/>
                          </button>

                          <Link to={ `/new-calling/${ item.id }` } style={ { backgroundColor: '#f6a935' } }>
                            <FiEdit2 color="#FFF" size={ 17 }/>
                          </Link>
                        </td>
                      </tr>
                    );
                  }) }
                  </tbody>
                </table>

                { loadingMore && <h3 style={ { textAlign: 'center', marginTop: 15 } }>Buscando dados...</h3> }
                { !loading && !isEmpty && <button onClick={ handleMore }>Buscar mais</button> }
              </>
            )
          }

        </Wrapper>
      </Container>

      { showPostModal && <Modal content={ detail } close={ togglePostModal }/> }
    </>
  )
    ;
}