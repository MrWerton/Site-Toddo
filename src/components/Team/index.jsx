import Card from '../Card';
import { Container } from './styles';



const Team = () => {
  return (
    
    <Container>
      <h2>Nosso Time</h2>
      <div>
        {/*o card vem aqui @Araujo*/}
        <Card name="Werton Pereira"  Img={'https://github.com/mrwerton.png'} />
       {/* O card vem aqui @Gabrile */}
      </div>
    </Container>
  );
};

export default Team;
