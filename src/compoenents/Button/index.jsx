import { Container } from './styles';

const Button = ({Img, description}) => {
  return (
    <Container>
      <img src={Img} alt="btnlogo" />
      <div>
        <p>
          Baixe na
        </p>
        <strong>
          {description}
        </strong>
      </div>
    </Container>
  );
};

export default Button;
