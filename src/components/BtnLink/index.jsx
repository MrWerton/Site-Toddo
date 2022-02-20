 
import { Container } from './styles';

const BtnLink = ({Img, title, link}) => {
  return (
    <Container>
      <a href={link}>
        
        {Img}
      <h2>{title}</h2>
      </a>
    </Container>
  );
};

export default BtnLink;
