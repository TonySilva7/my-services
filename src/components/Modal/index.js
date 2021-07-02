import { FiXCircle } from 'react-icons/fi';
import { Container, MyModal, MyRow } from './styles';

export default function Modal ({ content, close }) {

  console.log(content);

  return (
    <div>
      <MyModal>
        <Container>
          <button onClick={ close }>
            <FiXCircle size={ 20 } color="#FFF"/>
            Voltar
          </button>

          <div>
            <h2>Detalhes do Chamado</h2>

            <MyRow>
              <span>
                Cliente: <i>{ content.client }</i>
              </span>
            </MyRow>

            <MyRow>
              <span>
                Assunto: <i>{ content.subject }</i>
              </span>
            </MyRow>

            <MyRow>
              <span>
                Cadastrado em: <i>{ content.createdFormat }</i>
              </span>
            </MyRow>

            <MyRow>
              <span>
                Status:
                <i style={ { color: "#FFF", backgroundColor: content.status === 'Aberto' ? "#5cb85c" : "#999" } }>
                { content.status }
              </i>
              </span>
            </MyRow>

            {
              content.compliment !== '' && (
                <>
                  <h3>Complemento:</h3>
                  <p>
                    { content.compliment }
                  </p>
                </>
              )
            }
          </div>
        </Container>
      </MyModal>
    </div>
  );
}