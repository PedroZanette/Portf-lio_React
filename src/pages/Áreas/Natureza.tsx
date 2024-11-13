import { useState } from 'react';
import '../CssPages/Atividades.css';
import Navbar from '../../components/Navbar.tsx';

const Natureza = () => {
  const [selectedTrimester, setSelectedTrimester] = useState(1);

  const handleTrimesterChange = (trimester: number) => {
    setSelectedTrimester(trimester);
  };

  return ( 
  
    <div className="naturezaPage">
      <Navbar />
      <h1 className="header">Natureza</h1>
      <div className="bookGallery">
        <div className="book">
          <img src="../img/NATUREZA.png" alt="Capa Natureza 1° ano" />
          <div className="cover"><p>Capa 1° ano</p></div>
        </div>
        <div className="book">
          <img src="../img/Natureza2.png" alt="Capa Natureza 2° ano" />
          <div className="cover"><p>Capa 2° ano</p></div>
        </div>
        <div className="book">
          <img src="../img/Natureza3.png" alt="Capa Natureza 3° ano" />
          <div className="cover"><p>Capa 3° ano</p></div>
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
                <a href="https://classroom.google.com/c/NjI4MjE4MDIwMzc1/a/NjY2NjIzODc5OTYw/details">
                  NATUREZA - 06/03 - EVOLUCIONISMO
                </a>
              </p>
              <iframe
                loading="lazy"
                src="https://www.canva.com/design/DAF-vvLklWo/jyT6LP4KPS0K9lIGfVWYgA/view?embed"
                allowFullScreen
              ></iframe>
              <p className="activityDetails">Competências e habilidades: C2 - H11</p>
              <p className="activityDescription">
                Objetivo: Criar um meme sobre evolucionismo.
                <br />
                Assunto: Na aula em questão foi estudado as ideias evolucionistas, os principais cientistas que trabalharam nessa área e alguns conceitos dentro do evolucionismo.
                <br />
                Opinião: Essa atividade achei legal e difícil de fazer, pois a ideia da atividade em si é muito legal e divertida, porém o problema é minha falta de criatividade para essa atividade. Mas, quando pensei em algo, achei que ficou bom.
              </p>
            </div>
            {/* Adicione aqui mais atividades do 1° trimestre */}
          </div>
        )}
        {selectedTrimester === 2 && (
          <div>
            <h2>2° Trimestre</h2>
            <div className="activity">
              <p>
                <a href="https://www.canva.com/design/DAGGnnCXrN4/n_ms7_xCKnCTZtciaw-VWw/watch?utm_content=DAGGnnCXrN4&utm_campaign=designshare&utm_medium=link&utm_source=editor">
                  NATUREZA - 29/05 - RELAÇÕES ECOLÓGICAS
                </a>
              </p>
              <iframe
                loading="lazy"
                src="https://www.canva.com/design/DAGGnnCXrN4/NGQr_aSYFEcUZ1_vQtYxLQ/watch?embed"
                allowFullScreen
              ></iframe>
              <p className="activityDetails">Competências e habilidades: C3 com as habilidades H15 e H18.</p>
              <p className="activityDescription">
                Objetivo: Criar revista eletrônica sobre as relações ecológicas.
                <br />
                Assunto: Relações Ecológicas.
                <br />
                Opinião: Foi uma atividade muito legal e longa, pois criar uma revista é difícil, mas através dessa atividade pude compreender melhor o conteúdo abordado em sala.
              </p>
            </div>
            {/* Adicione aqui mais atividades do 2° trimestre */}
          </div>
        )}
        {selectedTrimester === 3 && (
          <div>
            <h2>3° Trimestre</h2>
            <div className="activity">
              <p>
                <a href="https://classroom.google.com/c/NjI4MjE4MDIwMzc1/a/NjgyMzY4OTE1MTIy/details">
                  NATUREZA - AULA 12/06 - Introdução ao Eletromagnetismo
                </a>
              </p>
              <iframe
                loading="lazy"
                src="https://padlet.com/embed/ym4ljxaq4jw41iht"
                allowFullScreen
              ></iframe>
              <p className="activityDetails">Competências e habilidades: C6 com as habilidade H36.</p>
              <p className="activityDescription">
                Objetivo: Criar linha do tempo e cartaz.
                <br />
                Assunto: Eletromagnetismo.
                <br />
                Opinião: Nessa atividade eu achei meio longa para terminar em sala sozinho, por isso por ser em dupla facilitou, pois realizar uma linha do tempo e um cartaz na mesma aula foi bem difícil. Mas gostei do conteúdo e de realizar as atividades, em particular gosto muito do Nikola Tesla.
              </p>
            </div>
            {/* Adicione aqui mais atividades do 3° trimestre */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Natureza;
