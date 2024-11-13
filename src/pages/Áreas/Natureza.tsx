import { useState } from 'react';
import '../CssPages/Atividades.css';
import Navbar from '../../components/Navbar.tsx';
import Natureza_1 from '../../img/NATUREZA.png';
import Natureza_2 from '../../img/Natureza2.png';
import Natureza_3 from '../../img/Natureza3.png';

const Natureza = () => {
  const [selectedTrimester, setSelectedTrimester] = useState(1);

  const handleTrimesterChange = (trimester: number) => {
    setSelectedTrimester(trimester);
  };

  return (
    <div>
      <Navbar />
      <div className="activityPage">
        <h1 className="header">Natureza</h1>
        <div className="bookGallery">
          <div className="book">
            <img src={Natureza_1} alt="Capa Natureza 1° ano" style={{ width: "20em", height: "18em" }} />
            <div className="cover"><p style={{ fontSize: "1.7em" }}>Capa 1° ano</p></div>
          </div>
          <div className="book">
            <img src={Natureza_2} alt="Capa Natureza 2° ano" style={{ width: "20em", height: "18em" }} />
            <div className="cover"><p style={{ fontSize: "1.7em" }}>Capa 2° ano</p></div>
          </div>
          <div className="book">
            <img src={Natureza_3} alt="Capa Natureza 3° ano" style={{ width: "20em", height: "18em" }} />
            <div className="cover"><p style={{ fontSize: "1.7em" }}>Capa 3° ano</p></div>
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
                  Assunto: Evolucionismo e principais cientistas.
                  <br />
                  Opinião: Gostei da atividade, foi divertida, mas exigiu criatividade.
                </p>
              </div>
              <div className="activity">
                <p>
                  <a href="https://classroom.google.com/c/NjI4MjE4MDIwMzc1/a/NjU1OTkyODI4NjQ2/details">
                    NATUREZA - AVALIAÇÃO 20/03 - PRÁTICA SOBRE CIRCUITOS
                  </a>
                </p>
                <iframe
                  loading="lazy"
                  src="https://docs.google.com/document/d/e/2PACX-1vQmP_PlaqcMERota_SeM2T64NL3RwkC_L8c7KoNlEIDsnaGv9DvWkFAlKtirliqfnHmS8XIsRVbn4Hh/pub?embedded=true"
                  allowFullScreen
                ></iframe>
                <p className="activityDetails">Competências e habilidades: C2 H6 C6 H34</p>
                <p className="activityDescription">
                  Objetivo: Experimentar circuitos em série e paralelo.
                  <br />
                  Assunto: Circuitos elétricos.
                  <br />
                  Opinião: A prática foi interessante e divertida, mas teve seus desafios.
                </p>
              </div>
              <div className="activity">
                <p>
                  <a href="https://classroom.google.com/c/NjI4MjE4MDIwMzc1/a/NjU1NDMzNDY5NjY2/details">
                    NATUREZA - 21/02 - REVISÃO ORGÂNICA
                  </a>
                </p>
                <iframe
                  loading="lazy"
                  src="https://www.canva.com/design/DAF9bjP_OcE/xHYk6q0F0gWY9vP-NSovOg/view?embed"
                  allowFullScreen
                ></iframe>
                <p className="activityDetails">Competências e habilidades: C1 H3 H4 H5</p>
                <p className="activityDescription">
                  Objetivo: Revisar temas orgânicos.
                  <br />
                  Assunto: Tetravalência, Combustíveis fósseis e mais.
                  <br />
                  Opinião: Relembrei conceitos importantes, mas foi uma atividade longa.
                </p>
              </div>
              <div className="activity">
                <p>
                  <a href="https://classroom.google.com/c/NjI4MjE4MDIwMzc1/a/NjU1NjI5OTExODE0/details">
                    NATUREZA - 28/02 - CLASSIFICAÇÃO CADEIAS
                  </a>
                </p>
                <iframe
                  loading="lazy"
                  src="https://docs.google.com/document/d/e/2PACX-1vQwNKKTmaJ4Qchl2pdIXvoYNofDgInBRCyr2fMjVbhFg3uB_dW__CJWyQ2i6JyVhMr8wFCOJEi2b7Ny/pub?embedded=true"
                  allowFullScreen
                ></iframe>
                <p className="activityDetails">Competências e habilidades: C1 H3 H4 H5</p>
                <p className="activityDescription">
                  Objetivo: Classificar cadeias carbônicas.
                  <br />
                  Assunto: Classificação de cadeias.
                  <br />
                  Opinião: Atividade interessante para revisar conteúdos.
                </p>
              </div>
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
                  Objetivo: Criar uma revista eletrônica sobre relações ecológicas.
                  <br />
                  Assunto: Relações Ecológicas.
                  <br />
                  Opinião: Uma atividade complexa, mas enriquecedora.
                </p>
              </div>
              <div className="activity">
                <p>
                  <a href="https://classroom.google.com/c/NjI4MjE4MDIwMzc1/a/NjgxNTkyNDE4NDQy/details">
                    NATUREZA - AULA 08/05 - Componentes dos circuitos
                  </a>
                </p>
                <iframe
                  loading="lazy"
                  src="https://miro.com/app/live-embed/uXjVKpRhFmA=/?moveToViewport=-1299,-600,2453,1186&embedId=246365405781"
                  allowFullScreen
                ></iframe>
                <p className="activityDetails">Competências e habilidades: C6 com as habilidade H35.</p>
                <p className="activityDescription">
                  Objetivo: Criar um mapa mental sobre componentes de circuitos.
                  <br />
                  Assunto: Componentes dos circuitos.
                  <br />
                  Opinião: Apesar dos desafios, o mapa mental foi uma boa maneira de organizar as informações.
                </p>
              </div>
              <div className="activity">
                <p>
                  <a href="https://www.canva.com/design/DAGJ5hICGUU/OTuBfhcMyEqurdjmTlV1Mw/view?utm_content=DAGJ5hICGUU&utm_campaign=designshare&utm_medium=link&utm_source=editor">
                    NATUREZA - 03/07 - POLÍMEROS, USO DE PLÁSTICOS
                  </a>
                </p>
                <iframe
                  loading="lazy"
                  src="https://www.canva.com/design/DAGJ5hICGUU/vzviK8jX-1tB5awX9dseZw/view?embed"
                  allowFullScreen
                ></iframe>
                <p className="activityDetails">Competências e habilidades: C3 com as habilidades H15 e H18.</p>
                <p className="activityDescription">
                  Objetivo: Criar cartaz sobre uso de plástico.
                  <br />
                  Assunto: Polímeros e plásticos.
                  <br />
                  Opinião: A atividade foi criativa e estimulante.
                </p>
              </div>
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
                  Objetivo: Criar uma linha do tempo e cartaz.
                  <br />
                  Assunto: Eletromagnetismo.
                  <br />
                  Opinião: Uma atividade interessante, ainda que longa, feita em dupla.
                </p>
              </div>
            </div>
          )}
          {selectedTrimester === 3 && (
            <div>
              <h2>3° Trimestre</h2>
              <div className="activity">
                <p>
                  <a href="https://classroom.google.com/c/NjI4MjE4MDIwMzc1/a/Njg1NDQ1ODU0ODM0/details">
                   NATUREZA - 11/09 - DESEQUILÍBRIOS AMBIENTAIS - PREPARAÇÃO
                  </a>
                </p>
                <iframe
                  loading="lazy"
                  src="https://www.canva.com/design/DAGQdUQenzE/931BiI8H6FRafnULP133SA/view?embed"
                  allowFullScreen
                ></iframe>
                <p className="activityDetails">Competências e habilidades: C5 com as habilidades H27 e H28.</p>
                <p className="activityDescription">
                  Objetivo: Responder as sete questões propostas e criar uma apresentação
                  <br />
                  Assunto: DESEQUILÍBRIOS AMBIENTAIS.
                  <br />
                  Opinião: Uma atividade complexa, mas enriquecedora.
                </p>
              </div>
              <div className="activity">
                <p>
                  <a href="https://www.canva.com/design/DAGVteHxiIw/VWeswAx81Xfliwv6NFqXKg/view?embed">
                    NATUREZA - AULA 06/11 - Vamos pensar em energia?
                  </a>
                </p>
                <iframe
                  loading="lazy"
                  src="https://www.canva.com/design/DAGVteHxiIw/VWeswAx81Xfliwv6NFqXKg/view?embed"
                  allowFullScreen
                ></iframe>
                <p className="activityDetails">Competências e habilidades: C6 com as habilidades H34, H35 e H36.</p>
                <p className="activityDescription">
                  Objetivo: Criar um plano de expansão da produção de energia em uma região do Brasil.
                  <br />
                  Assunto: Tipos de Energia.
                  <br />
                  Opinião: Apesar dos desafios, o mapa mental foi uma boa maneira de organizar as informações.
                </p>
              </div>
              <div className="activity">
                <p>
                  <a href="https://www.canva.com/design/DAGJ5hICGUU/OTuBfhcMyEqurdjmTlV1Mw/view?utm_content=DAGJ5hICGUU&utm_campaign=designshare&utm_medium=link&utm_source=editor">
                    NATUREZA - 03/07 - POLÍMEROS, USO DE PLÁSTICOS
                  </a>
                </p>
                <iframe
                  loading="lazy"
                  src="https://www.canva.com/design/DAGJ5hICGUU/vzviK8jX-1tB5awX9dseZw/view?embed"
                  allowFullScreen
                ></iframe>
                <p className="activityDetails">Competências e habilidades: C3 com as habilidades H15 e H18.</p>
                <p className="activityDescription">
                  Objetivo: Criar cartaz sobre uso de plástico.
                  <br />
                  Assunto: Polímeros e plásticos.
                  <br />
                  Opinião: A atividade foi criativa e estimulante.
                </p>
              </div>
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
                  Objetivo: Criar uma linha do tempo e cartaz.
                  <br />
                  Assunto: Eletromagnetismo.
                  <br />
                  Opinião: Uma atividade interessante, ainda que longa, feita em dupla.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Natureza;
