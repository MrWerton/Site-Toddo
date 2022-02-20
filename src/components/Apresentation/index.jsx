import { Container, Illustration, Content } from './styles';

const Apresentation = ({Img, title, description, reverse}) => {
  return (
    <Container reverse={reverse}>
     <Illustration>
        <img src={Img} />
     </Illustration>
     <Content>
       <h2>
          {title}
       </h2>
       <p>
          {description}
       </p>
     </Content>
    </Container>
  );
};

export default Apresentation;

