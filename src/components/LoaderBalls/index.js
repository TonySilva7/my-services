import { Container, Content } from './styles';
import { ReactComponent as LB } from './loader-balls.svg';

export default function LoaderBalls(props) {

  return (
    <Container>
      <Content size={ props.size } fill={props.fill}>
        <LB />
      </Content>
    </Container>
  );
 }