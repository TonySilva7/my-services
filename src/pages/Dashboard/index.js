import { useContext } from 'react';
import Header from '../../components/Header';
import { AuthContext } from '../../contexts/auth';

export default function Dashboard () {

  const { signOut } = useContext(AuthContext);

  return (
    <div>
      <Header/>
      <h1>Página Dashboard</h1>
      <button onClick={ () => signOut() }>Fazer Logout</button>
    </div>
  );
}