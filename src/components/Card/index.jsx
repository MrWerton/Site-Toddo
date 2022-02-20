import { Container } from './styles';

const Card = ({Img, name}) => {
  return (
    <Container>
      <img src={Img} alt="image of member of our team"/>
      <p>{name}</p>
    </Container>
  );
};

export default Card;
