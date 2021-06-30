import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import firebase from '../services/firebaseConnection';

export const AuthContext = createContext({});

function AuthProvider ({ children }) {

  const [ user, setUser ] = useState(null);
  const [ loadingAuth, setLoadingAuth ] = useState(false);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    function loadStorage () {
      const storageUser = localStorage.getItem('SystemUser');
      if (storageUser) {
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }
      setLoading(false);
    }

    loadStorage();
  }, []);

  // Login
  async function signIn(email, password) {
    setLoadingAuth(true);

    await firebase.auth().signInWithEmailAndPassword(email, password)
      .then(async (value) => {
        let myUID = value.user.uid;

        const userProfile = await firebase.firestore()
          .collection('users')
          .doc(myUID)
          .get();

        let dataUser = {
          uid: myUID,
          email: value.user.email,
          name: userProfile.data().name,
          avatarUrl: userProfile.data().avatarUrl,
        }

        setUser(dataUser);
        storageUser(dataUser);
        setLoadingAuth(false);
        toast.success('Bem vindo de volta, ' + dataUser.name);

      })
      .catch((err) => {
        toast.error('Opps! Algo deu errado :(');
        setLoadingAuth(false);
        console.log(err);
      });
  }

  // Register
  async function signUp (name, email, password) {
    setLoadingAuth(true);
    await firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(async (value) => {

        let myUID = value.user.uid;
        await firebase.firestore().collection('users')
          .doc(myUID).set({
            name: name,
            avatarUrl: null,
          })
          .then(() => {
            let dataUser = {
              uid: myUID,
              name: name,
              email: email,
              avatarUrl: null,
            };

            setUser(dataUser);
            storageUser(dataUser);
            setLoadingAuth(false);
            toast.success('Bem vindo à plataforma, ' + dataUser.name);
          });
      })
      .catch((err) => {
        console.log(err);
        toast.error('Opps! Algo deu errado :(')
        setLoadingAuth(false);
      });
  }

  // LogOut
  async function signOut() {
    await firebase.auth().signOut();
    localStorage.removeItem('SystemUser');
    setUser(null);
  }

  // LocalStorage
  function storageUser (dataUser) {
    localStorage.setItem('SystemUser', JSON.stringify(dataUser));
  }

  return (
    <AuthContext.Provider
      value={ {
        signed: !!user,
        user,
        loading,
        signUp,
        signOut,
        signIn,
        loadingAuth,
        setUser,
        storageUser
      } }
    >
      { children }
    </AuthContext.Provider>
  );
}

export default AuthProvider;

