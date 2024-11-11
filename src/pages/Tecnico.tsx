import { Link } from 'react-router-dom';
import './CssPages/Tecnico.css';
import Navbar from '../components/Navbar.tsx';

interface Card {
  title: string;
  copy: string;
  button: string;
  path: string;
}

const cards: Card[] = [
  { title: 'Programação de Aplicativos', copy: 'Atividades sobre desenvolvimento de aplicativos móveis e desktop.', button: 'Entrar', path: '/programacao-aplicativos' },
  { title: 'Banco de Dados', copy: 'Atividades sobre gerenciamento e manutenção de bancos de dados.', button: 'Entrar', path: '/banco-de-dados' },
  { title: 'Desenvolvimento de Sistemas', copy: 'Atividades sobre criação e desenvolvimento de sistemas completos.', button: 'Entrar', path: '/desenvolvimento-de-sistemas' },
  { title: 'Implantação e Manutenção de Sistemas', copy: 'Atividades sobre implementação e manutenção de sistemas corporativos.', button: 'Entrar', path: '/implantacao-manutencao-sistemas' },
  { title: 'Modelagem de Sistemas', copy: 'Atividades sobre o planejamento e modelagem de sistemas de informação.', button: 'Entrar', path: '/modelagem-de-sistemas' },
  { title: 'Teste de Sistemas', copy: 'Atividades sobre testes de sistemas para garantir a qualidade e segurança.', button: 'Entrar', path: '/teste-de-sistemas' }
];

function card(title: string, copy: string, button: string, path: string) {
  return (
    <div className="card">
      <div className="content">
        <h2 className="title">{title}</h2>
        <p className="copy">{copy}</p>
        <Link to={path}>
          <button className="btn">{button}</button>
        </Link>
      </div>
    </div>
  );
}

const Tecnico = () => {
  return (
    <div className="container">
      <Navbar />
      <h1 className='titulo'>Áreas do Técnico</h1>
      <main className="page-content">
        {cards.map((cardItem) => card(cardItem.title, cardItem.copy, cardItem.button, cardItem.path))}
      </main>
    </div>
  );
};

export default Tecnico;
