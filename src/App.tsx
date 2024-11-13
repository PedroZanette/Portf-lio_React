import { Link } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <div className="welcome-container">
      <h1 className="welcome-title">Bem-vindo ao Meu Portfólio</h1>
      <p className="welcome-text">Explore meus projetos, experiências e habilidades na área de desenvolvimento!</p>
      <Link to="/home">
        <button className="welcome-button">Entrar</button>
      </Link>
    </div>
  );
}

export default App;
