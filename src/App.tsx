import { useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  useEffect(() => {
    // JavaScript para criar o efeito binario
    const container = document.querySelector('.binary-matrix');
    const columns = Math.floor(window.innerWidth / 20); // 20px width para cada coluna

    if (container) { // Verificação para garantir que container não é null
      for (let i = 0; i < columns; i++) {
        const column = document.createElement('div');
        column.classList.add('column');

        column.style.animationDelay = `${Math.random() * 2}s`; // Staggered effect
        container.appendChild(column);

        // Cria randomicamente "0"s e "1"s
        for (let j = 0; j < 30; j++) {
          const number = document.createElement('span');
          number.innerText = Math.random() > 0.5 ? '0' : '1';
          column.appendChild(number);
        }
      }
    }
  }, []);

  return (
    <div className="welcome-container">
      <div className="binary-matrix"></div>
      <h1 className="welcome-title">Bem-vindo ao Meu Portfólio</h1>
      <p className="welcome-text">Explore meus projetos, experiências e habilidades na área de desenvolvimento!</p>
      <Link to="/home">
        <button className="welcome-button">Entrar</button>
      </Link>
    </div>
  );
}

export default App;
