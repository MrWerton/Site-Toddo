import './App.css';
import Header from './compoenents/Header';
/* import AppDetails from './compoenents/AppDetails';    apague esse comentário para vizualizar as mudanças @Araujo*/ 
/* import DownloadApp from './compoenents/DownloadApp'; apaga esse comentário para vizualizar as mudanças @gabriele*/
import Apresentations from './compoenents/Apresentations';
import Team from './compoenents/Team';
import ProjectLinks from './compoenents/ProjectLinks';

function App() {
    return (
        <div className="App">
            <Header />
           {/*  <AppDetails /> */}
            {/* <DownloadApp /> */}
            <Apresentations />
             <Team/> 
            <ProjectLinks/>
        </div>
    );
}

export default App;
