import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  const [buttonText, setButtonText] = useState('');
  const [buttonIndex, setButtonIndex] = useState(0);

  // Animação de digitação para o botão "Entrar"
  useEffect(() => {
    const buttonIntervalId = setInterval(() => {
      if (buttonIndex < 'Entrar'.length) {
        setButtonText((prevText) => prevText + 'Entrar'[buttonIndex]);
        setButtonIndex(buttonIndex + 1);
      } else {
        clearInterval(buttonIntervalId);
      }
    }, 100);

    return () => clearInterval(buttonIntervalId);
  }, [buttonIndex]);

  return (
    <div className="welcome-container">
      <h1 className="welcome-title">Bem-vindo ao Meu Portfólio</h1>
      <p className="welcome-text">Explore meus projetos, experiências e habilidades na área de desenvolvimento!</p>
      <Link to="/home">
        <button className="welcome-button">{buttonText}</button>
      </Link>
    </div>
  );
}

export default App;
