import { Container, Content, Illustration } from './styles';
import IllustrationImg from '../../assets/b.png'
import LogoImg from '../../assets/logoImg.svg'

const Header = () => {
  return (
    <Container>
      <Content>
        <div>
        <h1>
          Toddo
        </h1>
        <img src={LogoImg} alt="Logo of app, is a scheduling"/>
        </div>
        <div class="Description">
          <p>
          Um app para organizar suas tarefas!
          </p>
        </div>
      </Content>
      <Illustration>
          <img src={IllustrationImg} alt="illustration"/>
      </Illustration>
    </Container>
  );
};

export default Header;
