import './App.css';
import Header from './components/Header';
import AppDetails from './compoenents/AppDetails';     
import DownloadApp from './components/DownloadApp'; 
import Apresentations from './components/Apresentations';
import Team from './components/Team';
import ProjectLinks from './components/ProjectLinks';

function App() {
    return (
        <div className="App">
            <Header />
             <AppDetails /> 
             <DownloadApp /> 
            <Apresentations />
             <Team/> 
            <ProjectLinks/>
        </div>
    );
}

export default App;
