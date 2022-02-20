import {Container, Description, Illustraiton} from './styles';
import PhonesImg from '../../assets/phones.png';
import AppleIcon from '../../assets/appleIcon.svg';
import GoogleIcon from '../../assets/googleIcon.svg';
import Button from '../Button';

const DownloadApp = () => {
    return (
        <Container>
            <Illustraiton>
                <img src = {PhonesImg} />
            </Illustraiton>
            <Description>
                <h2>
                    Baixe-nos agora
                </h2>
                <p>
                    Gerencie suas tarefas e organize sua vida! Baixe já nosso app, é grátis!
                </p>
                <div class = "footer" > 
                <Button Img= {AppleIcon} description= "Apple Store" />
                <Button Img= {GoogleIcon} description= "Play Store" />
                </div>
            </Description>
        </Container>

    )
}
export default DownloadApp;