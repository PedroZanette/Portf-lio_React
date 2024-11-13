import { useState } from 'react';
import '../CssPages/Atividades.css';
import Navbar from '../../components/Navbar.tsx';
import Matematica_1 from '../../img/MATEMÁTICA.png'
import Matematica_2 from '../../img/Matemática2.png'
import Matematica_3 from '../../img/Matematica 3.png'

const Matematica = () => {
  const [selectedTrimester, setSelectedTrimester] = useState(1);

  const handleTrimesterChange = (trimester: number) => {
    setSelectedTrimester(trimester);
  };

  return (
    <div>
      <Navbar />
      <div className="activityPage">
        <h1 className="header">Matemática</h1>
        <div className="bookGallery">
          <div className="book">
            <img src={Matematica_1} alt="Capa Matemática 1° ano" style={{width: "20em",height: "18em"}}/>
            <div className="cover"><p style={{fontSize: "1.7em"}}>Capa 1° ano</p></div>
          </div>
          <div className="book">
            <img src={Matematica_2} alt="Capa Matemática 2° ano" style={{width: "20em",height: "18em"}}/>
            <div className="cover"><p style={{fontSize: "1.7em"}}>Capa 2° ano</p></div>
          </div>
          <div className="book">
            <img src={Matematica_3} alt="Capa Matemática 3° ano" style={{width: "20em",height: "18em"}}/>
            <div className="cover"><p style={{fontSize: "1.7em"}}>Capa 3° ano</p></div>
          </div>
        </div>
        <div className="sideNav">
          <button onClick={() => handleTrimesterChange(1)}>1° Trimestre</button>
          <button onClick={() => handleTrimesterChange(2)}>2° Trimestre</button>
          <button onClick={() => handleTrimesterChange(3)}>3° Trimestre</button>
        </div>
        <div className="activitiesSection">
          {selectedTrimester === 1 && (
            <div>
              <h2>1° Trimestre</h2>
              <div className="activity">
                <p>
                  <a href="https://classroom.google.com/c/NjI4MjE4MDIwMzc1/a/NjY5MTAyODk2OTU0/details">
                    MATEMÁTICA - 21/03 - AV1 - ARCOS E ÂNGULOS
                  </a>
                </p>
                <iframe
                  loading="lazy"
                  src="https://www.youtube.com/embed/nNjne-Ufn-c?si=UD-HJjgnYkZnAPad"
                  allowFullScreen
                ></iframe>
                <p className="activityDetails">
                  Competências e habilidades: C2 - Reconhecer e utilizar a linguagem algébrica e suas representações como a
                  linguagem das ciências, necessária para expressar a relação entre grandezas e criar modelos descritivos
                  permitindo conexões da matemática com fenômenos, sistemas naturais e tecnológicos.
                  <br />
                  H5 - Ler e interpretar diferentes linguagens e representações envolvendo variações de grandezas;
                  <br />
                  H16 - Compreender e construir modelos que correspondem a fenômenos periódicos.
                </p>
                <p className="activityDescription">
                  Objetivos: Produzir uma trilha dentro do ambiente da escola utilizando os conceitos de Arcos e ângulos com todas
                  as instruções e demais elementos necessários.
                  <br />
                  Opinião: Essa atividade avaliativa foi muito legal, pois eu e meu grupo criamos uma história boa e divertida.
                  Além de sair do padrão de atividades avaliativas, ela nos faz pensar mais e ser mais criativos para realizá-la.
                  Foi uma das atividades mais legais até o momento.
                </p>
              </div>
            </div>
          )}
          {selectedTrimester === 2 && (
            <div>
              <h2>2° Trimestre</h2>
              <div className="activity">
                <p>
                  <a href="https://classroom.google.com/c/NjI4MjE4MDIwMzc1/a/NjgzNTgyOTUxMjEw/details">
                    AV1 - MATEMÁTICA - 23/05 - FILME QUEBRANDO A BANCA
                  </a>
                </p>
                <iframe
                  loading="lazy"
                  src="https://docs.google.com/document/d/1eHp0aqlTsZIwh-BKsCMNfg6OFHEjNtfYJ44Gn2nF1BQ/pub?embedded=true"
                  allowFullScreen
                ></iframe>
                <p className="activityDetails">
                  Competência: C5 - Aplicar o pensamento probabilístico para quantificar e fazer previsões em situações aplicadas
                  a diferentes áreas do conhecimento e da vida cotidiana.
                  <br />
                  Habilidades: H31 e H32.
                </p>
                <p className="activityDescription">
                  Objetivo: Assistir ao filme Quebrando a banca e responder um questionário com perguntas sobre o filme.
                  <br />
                  Assunto: Princípio fundamental da contagem.
                  <br />
                  Opinião: Gostei muito do filme pois fala de dinheiro, cassino e muitas outras coisas legais. Gostei do jeito
                  que a matemática é aplicada para eles ficarem ricos e também da estratégia.
                </p>
              </div>
              <div className="activity">
                <p>
                  <a href="https://classroom.google.com/c/NjI4MjE4MDIwMzc1/a/Njk3MDkyNjAxMDE3/details">
                    MATEMÁTICA - AV2 - BANCO IMOBILIÁRIO
                  </a>
                </p>
                <iframe
                  loading="lazy"
                  src="https://www.canva.com/design/DAGKMSe26pA/JAqMsmD2XyIG4YIRcSdFyw/view?embed"
                  allowFullScreen
                ></iframe>
                <p className="activityDetails">
                  Competência: C5 - Aplicar o pensamento probabilístico para quantificar e fazer previsões em situações aplicadas
                  a diferentes áreas do conhecimento e da vida cotidiana.
                  <br />
                  Habilidades: H30, H31 e H32.
                </p>
                <p className="activityDescription">
                  Objetivo: Criar um jogo no formato de Banco Imobiliário com tema sendo a cidade de Florianópolis.
                  <br />
                  Assunto: Princípio fundamental da contagem.
                  <br />
                  Opinião: Foi uma atividade muito legal de ser desenvolvida pois usar matemática, Florianópolis e Banco Imobiliário para
                  uma atividade acabou sendo interessante. Além disso, colocamos o "Frango do G" para representar os Ingleses.
                </p>
              </div>
            </div>
          )}
          {selectedTrimester === 3 && (
            <div>
              <h2>3° Trimestre</h2>
              <div className="activity">
                <p>
                  <a href="https://classroom.google.com/c/NjI4MjE4MDIwMzc1/a/Njk3MDkyNjAxMDE3/details">
                    MATEMÁTICA - AV2 - BANCO IMOBILIÁRIO
                  </a>
                </p>
                <iframe
                  loading="lazy"
                  src="https://www.canva.com/design/DAGKMSe26pA/JAqMsmD2XyIG4YIRcSdFyw/view?embed"
                  allowFullScreen
                ></iframe>
                <p className="activityDetails">
                  Competência: C5 - Aplicar o pensamento probabilístico para quantificar e fazer previsões em situações aplicadas
                  a diferentes áreas do conhecimento e da vida cotidiana.
                  <br />
                  Habilidades: H30, H31 e H32.
                </p>
                <p className="activityDescription">
                  Objetivo: Criar um jogo no formato de Banco Imobiliário com tema sendo a cidade de Florianópolis.
                  <br />
                  Assunto: Princípio fundamental da contagem.
                  <br />
                  Opinião: Foi uma atividade muito legal de ser desenvolvida pois usar matemática, Florianópolis e Banco Imobiliário para
                  uma atividade acabou sendo interessante. Além disso, colocamos o "Frango do G" para representar os Ingleses.
                </p>
              </div>
              {/* Adicione aqui mais atividades do 3° trimestre */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Matematica;
