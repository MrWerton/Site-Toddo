import Apresentation from '../Apresentation';
import { Container } from './styles';
import PersonI from '../../assets/Person.svg'
import PersonII from '../../assets/Person2.svg'
import PersonIII from '../../assets/Person3.svg'
const Resumo = {
  title: 'Resumo', 
  description: '',//add teu texto aqui @araujo
  Img: PersonI
}
const Justificativa = {
  title: 'Justificativa', 
  description: 'O presente projeto visa a criação de uma agenda eletrônica que tem por finalidade ajudar o usuario na organização de suas tarefas diárias. Consideramos relevante esse projeto ,em primeiro lugar, pelo fato de que na atualidade a grande maioria das pessoas tem acesso à tecnologia e, em segundo lugar, por proporcionar àqueles que fizerem uso dessa ferramenta o exercício da disciplina ao avaliarem se suas metas foram atingidas. Enfim, forma um projeto simples, porém de grande utilidade.',  
  Img: PersonII
}
const Objetivos = {
  title: 'Objetivos', 
  description: 'O objetivo do projeto é desenvolver uma aplicação mobile para gerenciamento de tarefas (todo). A criação do app será totalmente feita na pilha js para aplicações fullstack. O objetivo é abordar a lógica por trás de uma aplicação completa. Ou seja, nós abordaremos a modelagem do banco de dados, a criação da api, a constução da interface, o consumo da api e também abordaremos o processo para autentificação de um usuário. No final do projeto, nós esperamos está ciente do procedimento para a construção de uma aplicação completa.',
  Img: PersonIII
}
const Apresentations = () => {
  return (
    <Container>
      <div>

      {/* o Apresentation vem aqui @Araujo*/}
      </div>
      
      <div style={{justifyContent: 'flex-end'}}>
         <Apresentation reverse={true} className="ItemIII" Img={Objetivos.Img} title={Objetivos.title} description={Objetivos.description}/>
      </div>
    <div>
    <Apresentation className= "ItemII"  Img= {Justificativa.Img} title={Justificativa.title} description= {Justificativa.description} />
    </div>
      
    </Container>
  );
};

export default Apresentations;
