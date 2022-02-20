import Animation from '../Animation';
import { Container } from './styles';
import github from '../../assets/animations/github.json'
import figma from '../../assets/animations/figma.json'
import BtnLink from '../BtnLink';
const ProjectLinks = () => {
  const gitHubAnime = <Animation anime={github}/>
  const FigmaAnime = <Animation anime={figma}/>
  return (
    <Container>
     <BtnLink title="Design"  link='https://www.figma.com/file/zn24Q4LZYWjwTZ5ncBLL8J/Toddo?node-id=0%3A1/' Img={FigmaAnime}/>
     <BtnLink title="Repositório"  link='https://github.com/MrWerton/Toddo'  Img={gitHubAnime}/>
    </Container>
  );
};

export default ProjectLinks;
