import { createContext, useEffect, useState } from 'react';
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

      })
      .catch((err) => {
        setLoadingAuth(false);
        console.log(err);
      });
  }

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
          });
      })
      .catch((err) => {
        console.log(err);
        setLoadingAuth(false);
      });
  }

  function storageUser (dataUser) {
    localStorage.setItem('SystemUser', JSON.stringify(dataUser));
  }

  async function signOut() {
    await firebase.auth().signOut();
    localStorage.removeItem('SystemUser');
    setUser(null);
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
        loadingAuth
      } }
    >
      { children }
    </AuthContext.Provider>
  );
}

export default AuthProvider;

