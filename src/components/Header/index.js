import { useContext } from 'react';
import { FiHome, FiSettings, FiUser } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { ReactComponent as Avatar } from '../../assets/avatar-only.svg';
import { AuthContext } from '../../contexts/auth';
import { ImgContainer, SideBar } from './styles';
// import { IoHome } from 'react-icons/all';

export default function Header () {
  const { user } = useContext(AuthContext);

  return (
    <SideBar>
      <div>
        <ImgContainer>
          { user.avatarUrl === null ? <Avatar alt="avatar"/> : "imagem" }
        </ImgContainer>
      </div>

      <Link to="/dashboard">
        <FiHome color="#7A75BC" size={ 24 }/>
        Chamados
      </Link>

      <Link to="/customers">
        <FiUser color="#7A75BC" size={ 24 }/>
        Clientes
      </Link>

      <Link to="/profile">
        <FiSettings color="#7A75BC" size={ 24 }/>
        Configurações
      </Link>

    </SideBar>
  );
}