import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Areas from './pages/Áreas';
import Tecnico from './pages/Tecnico';
import PPE from './pages/PPE';
import Natureza from './pages/Áreas/Natureza';
// import Matematica from './pages/Áreas/Matematica';
// import Humanas from './pages/Áreas/Humanas';
// import Linguagens from './pages/Áreas/Linguagens';
// import Banco from './pages/Técnico/BancoDeDados';
// import Desenvolvimento from './pages/Técnico/Desenvolvimento';
// import Modelagem from './pages/Técnico/Modelagem';
// import Implantação from './pages/Técnico/Implantação';

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
        {/* <Route path="/matematica" element={<Matematica />} />
        <Route path="/humanas" element={<Humanas />} />
        <Route path="/linguagens" element={<Linguagens />} />
        <Route path="/Banco" element={<Banco />} />
        <Route path="/Desenvolvimento" element={<Desenvolvimento />} />
        <Route path="/Modelagem" element={<Modelagem />} />
        <Route path="/Implantação" element={<Implantação />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;