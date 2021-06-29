import { MyTitle } from './styles';

export default function Title ({ children, name }) {
  return (
    <MyTitle>
      { children }
      <span>{ name }</span>
    </MyTitle>
  );
}