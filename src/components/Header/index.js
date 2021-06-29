import { useContext } from 'react';
import { FiHome, FiSettings, FiUser } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { ReactComponent as Avatar } from '../../assets/avatar.svg';
import { AuthContext } from '../../contexts/auth';
import { SideBar } from './styles';
// import { IoHome } from 'react-icons/all';

export default function Header () {
  const { user } = useContext(AuthContext);

  return (
    <SideBar>
      <div>
        { user.avatarUrl === null ? <Avatar alt="avatar"/> : "imagem" }
      </div>

      <Link to="/dashboard">
        <FiHome color="#fff" size={ 24 }/>
        Chamados
      </Link>

      <Link to="/dashboard">
        <FiUser color="#fff" size={ 24 }/>
        Clientes
      </Link>

      <Link to="/dashboard">
        <FiSettings color="#fff" size={ 24 }/>
        Configurações
      </Link>

    </SideBar>
  );
}