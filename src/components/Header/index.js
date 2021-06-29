import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import { SideBar } from './styles';
import { ReactComponent as Avatar} from '../../assets/avatar.svg'
import { Link } from 'react-router-dom';

export default function Header () {
  const { user } = useContext(AuthContext);

  return (
    <SideBar>
      { user.avatarUrl === null ? <Avatar alt="avatar"/> : "imagem"}
      <Link>Chamados</Link>

      <span>{ user.name }</span>
    </SideBar>
  );
}