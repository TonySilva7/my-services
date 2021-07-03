import { useContext, useState } from 'react';
import { FiPlusCircle, FiSettings } from "react-icons/fi";
import { toast } from 'react-toastify';
import { ReactComponent as Avatar } from '../../assets/avatar-only.svg';
import Header from '../../components/Header';
import LoaderBalls from '../../components/LoaderBalls';
import Title from '../../components/Title';
import { AuthContext } from '../../contexts/auth';
import firebase from '../../services/firebaseConnection';
import { Container, ContentProfile, ImgProfile, LogOut } from './styles';

export default function Profile () {

  const { user, setUser, signOut, storageUser } = useContext(AuthContext);
  const [ name, setName ] = useState(user && user.name);
  const [ email, setEmail ] = useState(user && user.email);
  const [ avatarUrl, setAvatarUrl ] = useState(user && user.avatarUrl);
  const [ imageAvatar, setImageAvatar ] = useState(null);
  const [ loading, setLoading ] = useState(false);

  console.log(setEmail);

  async function handleUpload () {
    const currentUid = user.uid;
    await firebase.storage()
      .ref(`images/${ currentUid }/${ imageAvatar.name }`)
      .put(imageAvatar)
      .then(async () => {
        console.log('Imagem enviada');

        await firebase.storage()
          .ref(`images/${ currentUid }`)
          .child(imageAvatar.name).getDownloadURL()
          .then(async (url) => {
            let urlImg = url;

            await firebase.firestore()
              .collection('users')
              .doc(user.uid)
              .update({
                avatarUrl: urlImg,
                name: name,
              })
              .then(() => {
                setLoading(true);
                let userData = {
                  ...user,
                  avatarUrl: urlImg,
                  name: name,
                };
                setUser(userData);
                storageUser(userData);
              });
          });
        setLoading(false);
        toast.info('Imagem enviado com sucesso!');
      });
  }

  async function handleSave (event) {
    event.preventDefault();

    if (imageAvatar === null && name !== '') {
      setLoading(true);
      await firebase.firestore()
        .collection('users')
        .doc(user.uid)
        .update({
          name: name,
        })
        .then(() => {

          let userData = {
            ...user,
            name: name,
          };

          setUser(userData);
          storageUser(userData);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (name !== '' && imageAvatar !== null) {
      await handleUpload();
    }
  }

  function handleFile (event) {
    if (event.target.files[0]) {

      const myImage = event.target.files[0];
      if (myImage.type === 'image/jpeg' || myImage.type === 'image/png') {
        setImageAvatar(myImage);
        const imgUrl = URL.createObjectURL(myImage);
        setAvatarUrl(imgUrl);
      } else {
        alert('Envie uma imagem do tipo JPEG ou PNG');
        setImageAvatar(null);
        return null;
      }
    }
  }

  return (
    <>
      <Header/>
      <Container>
        <Title name="Meu Perfil">
          <FiSettings size={ 25 }/>
        </Title>

        <ContentProfile>
          <form onSubmit={ handleSave }>
            <label>
              <ImgProfile>
                <span>
                  <FiPlusCircle color="#fff" size={ 40 }/>
                </span>
                <input type="file" accept="image/*" onChange={ handleFile }/>
                <div>
                  { avatarUrl === null
                    ? <Avatar height={ 200 } alt="Avatar"/>
                    : loading
                      ? <LoaderBalls size={ 50 } fill="#FFF"/>
                      : <img src={ avatarUrl } height={ 250 } alt="Imagem de perfil do usuário"/>
                  }
                </div>
              </ImgProfile>
            </label>

            <label htmlFor="name">Nome:</label>
            <input type="text" name="name" value={ name } onChange={ (e) => setName(e.target.value) }/>

            <label htmlFor="email">Email:</label>
            <input type="email" name="email" value={ email } disabled={ true }/>

            <button type="submit">Salvar</button>
          </form>
        </ContentProfile>

        <LogOut>
          <button onClick={ () => signOut() }>Sair</button>
        </LogOut>
      </Container>
    </>
  );
}