import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Areas from './pages/Áreas';
import Tecnico from './pages/Tecnico';
import PPE from './pages/PPE';
import Natureza from './pages/Áreas/Natureza';
import Matematica from './pages/Áreas/Matematica';
import Humanas from './pages/Áreas/Humanas';
import Linguagens from './pages/Áreas/Linguagens';
import Banco from './pages/Técnico/BancoDeDados';
import Desenvolvimento from './pages/Técnico/Desenvolvimento';
import Modelagem from './pages/Técnico/Modelagem';
import Implantação from './pages/Técnico/Implantação';
import ProgramacaoApp from './pages/Técnico/ProgramacaoApp';
import TesteDeSistemas from './pages/Técnico/TesteDeSistemas';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/areas" element={<Areas />} />
        <Route path="/tecnico" element={<Tecnico />} />
        <Route path="/ppe" element={<PPE />} />
        <Route path="/natureza" element={<Natureza />} />
        <Route path="/matematica" element={<Matematica />} />
        <Route path="/humanas" element={<Humanas />} />
        <Route path="/linguagens" element={<Linguagens />} />
        <Route path="/banco-de-dados" element={<Banco />} />
        <Route path="/desenvolvimento-de-sistemas" element={<Desenvolvimento />} />
        <Route path="/modelagem-de-sistemas" element={<Modelagem />} />
        <Route path="/implantacao-manutencao-sistemas" element={<Implantação />} />
        <Route path="/programacao-aplicativos" element={<ProgramacaoApp />} />
        <Route path="/teste-de-sistemas" element={<TesteDeSistemas />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;