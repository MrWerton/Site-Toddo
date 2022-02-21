import { Container,Description, Illustration  } from './styles';
import PhoneImg from '../../assets/phone.svg'
const AppDetails = () => {
  return (
    <Container>
      <Illustration>
        <img src={PhoneImg}/>
      </Illustration>
      <Description>
        <h2>Um app minimalista que foca apenas no que é necessário!</h2>
        <h2>Organize sua vida de maneira simples.</h2>
        <h2>Somos um aplicativo totalmente gratuito.
        </h2>
      </Description>
    </Container>
  );
};

export default AppDetails;
