import { useContext, useState } from 'react';
import { FiSettings, FiUpload, FiPlusCircle } from "react-icons/fi";
import { ReactComponent as Avatar } from '../../assets/avatar-only.svg';
import Header from '../../components/Header';
import Title from '../../components/Title';
import { AuthContext } from '../../contexts/auth';
import { ContentProfile, LogOut, Wrapper } from './styles';

export default function Profile () {

  const { user, signOut } = useContext(AuthContext);
  const [ name, setName ] = useState(user && user.name);
  const [ email, setEmail ] = useState(user && user.email);
  const [ avatarUrl, setAvatarUrl ] = useState(user && user.avatarUrl);

  if (avatarUrl === null) {
    setAvatarUrl("https://love.doghero.com.br/wp-content/uploads/2019/03/petisco-para-filhotes.png");
  }

  return (
    <>
      <Header/>
      <Wrapper>
        <Title name="Meu Perfil">
          <FiSettings size={ 25 }/>
        </Title>

        <ContentProfile>
          <form>
            <label>
              <span>
                <FiPlusCircle color="#fff" size={ 40 }/>
              </span>
              <input type="file" accept="image/*"/>
              <br/>
              <div>
                { avatarUrl === null
                  ? <Avatar height={ 200 } alt="Avatar"/>
                  : <img src={ avatarUrl } height={ 250 } alt="Imagem de perfil do usuário"/>
                }
              </div>
            </label>
            <br/>
            <label htmlFor="name">Nome:</label> <br/>
            <input type="text" name="name" value={ name } onChange={ (e) => setName(e.target.value) }/>
            <br/>
            <label htmlFor="email">Email:</label> <br/>
            <input type="email" name="email" value={ email } disabled={ true }/>
            <br/>
            <button type="submit">Salvar</button>
          </form>
        </ContentProfile>

        <LogOut>
          <button onClick={() => signOut()}>Sair</button>
        </LogOut>
      </Wrapper>
    </>
  );
}