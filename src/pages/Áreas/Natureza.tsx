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
                  Assunto: Na aula em questão foi estudadoas ideias evolucionistas, os principais cientistas que trabalharam nessa
                  área e alguns conceitos dentro do evolucionismo.
                  <br />
                  Opnião: Essa atividade achei legal e difícil de fazer pois a idéia da atividade em si é muito legal e divertida,
                  porem o problema é minha falta de criatividade para essa atividade, mas quando pensei em algo achei que ficou
                  bom.
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
                  Assunto: Essa atividade foi uma prática sobre circuitos sendo necessário completar o anexo na atividade.
                  <br />
                  Opnião: Por ter sido uma atividade prática, acabou ficando difícil pois enquanto meu grupo tentava montar o
                  circuito dois colegas quase quimaram o dedo, pelo menos foi engraçado. Em geral a atividade foi bacana de se
                  realizar e espero que outras iguais essas ainda apareçam ao longo do ano.
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
                  Objetivo: Criar uma apresentação com os tópicos exigidos
                  <br />
                  Assunto: Tetravalência,Combustíveis fósseis, Hidrocarbonetos,Ligação Sigma e Pi, Classificação Carbono e
                  Representações Molecular, Estrutural e em Linha
                  <br />
                  Opnião: Gosto quando revisa assuntos já estudados pois acabo me lembrando de coisas importantes, nessa atividade
                  achei ela meio longa pois são muitos tópicos mas sempre é bom pesquisar e relembrar aquilo que é necessário para
                  o ano.
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
                  Objetivo: Responder o docs classificando corretamente as cadeias carbônicas
                  <br />
                  Assunto: Classificação de cadeias carbônicas
                  <br />
                  Opnião: Como dito na atividade acima eu gosto de revisar conteúdos então essa atividade foi legal pois vimos
                  novamente um assunto dos anos passados e além de eu achar interessante essa ligação das cadeias carbônicas.                </p>
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
                  Objetivo: Criar revista eletrônica sobre as relações
                  <br />
                  Assunto: Relações Ecológicas
                  <br />
                  Opnião: Foi uma atividade muito legal e longa pois criar uma revista é difícil mas através dessa atividade pude compreender
                  melhor o conteúdo abordado em sala.
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
                  Objetivo: Mapa mental sobre componentes dos circuitos elétricos
                  <br />
                  Assunto: Componentes dos circuitos.
                  <br />
                  Opnião: Infelizmente por conta de certos colegas essa atividade e aula por si só se tornaram complexas, pois
                  acabamos
                  por chatear a professora durante a aula e recebemos como presente uma prova supresa, que eu não consegui a média
                  mas pelo caderno
                  eu fui salvo. O mapa mental foi uma ideia legal pois consegui dividir certinho os componentes dos circuitos e
                  assim
                  entender de maneira separada cada um deles.
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
                  Opnião: A proposta foi bem divertida de se fazer pois nos estimulou a fazer algo criativo para chamar a atenção de nós
                  jovens, já que somos os maiores consumidores de plástico do SESI.
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
                  Opnião: Nessa atividade eu achei meio longa para terminar em sala sozinho por isso por ser em dupla facilitou, pois realizar
                  uma linha do tempo e um cartaz na mesma aula foi bem difícil, mas gostei do conteúdo e de realizar as atividades
                  em particular gosto muito do Nikola Tesla.
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
                  Opinião: Uma atividade bem legal pois tive que pesquisar sobre questões modelo ENEM, me ajudando principalmente
                  para minha preparação para o próprio ENEM.
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
                  Opinião: Gostei muito dessa atividade pois tivemos que analizar dados que a professora nos proporcionou e
                  realizar um plano de energia em uma região do Brasil, com isso pesquisando também dados sobre o preço, impactos,
                  desvantagens, vantagens e muitos outros sobre as energias que escolhemos sendo elas: Energia Eólica e Nuclear.
                </p>
              </div>
              <div className="activity">
                <p>
                  <a href="https://classroom.google.com/c/NjI4MjE4MDIwMzc1/a/NjgyMzY4OTE1MTIy/details">
                    NATUREZA - 28/08 - EMISSÕES RADIOATIVAS
                  </a>
                </p>
                <iframe
                  loading="lazy"
                  src="https://www.canva.com/design/DAGPJfyWTww/bQMpCKWfbUe4Xb2dktXUIg/view?embed"
                  allowFullScreen
                ></iframe>
                <p className="activityDetails">Competências e habilidades: C5 com as habilidade H24, H25, H26, H27 e H28.</p>
                <p className="activityDescription">
                  Objetivo: Montar uma apresentação sobre o ENRIQUECIMENTO DO URÂNIO.
                  <br />
                  Assunto: Radioatividade Emissões.
                  <br />
                  Opinião: A atividade foi interessante e permitiu um bom entendimento sobre o tema. Contudo longa esse 
                  trabalho em trio ajudou a aprofundar o conhecimento sobre o enriquecimento do urânio e as emissões radioativas
                  como por exemplo: Como funciona, particulas (alfa, beta e gama), etapas do processo, entre outros.
                </p>
              </div>
              <div className="activity">
                <p>
                  <a href="https://classroom.google.com/c/NjI4MjE4MDIwMzc1/a/Njg2NDQyNDMzOTU5/details">
                    NATUREZA - 30/10 - REVISÃO ECOLOGIA
                  </a>
                </p>
                <iframe
                  loading="lazy"
                  src="https://www.canva.com/design/DAGVDoJits0/g7JaNRBp5vHuZU1e3RTPaw/view?embed"
                  allowFullScreen
                ></iframe>
                <p className="activityDetails">Competências e habilidades: C5 com as habilidade H24, H25, H26, H27 e H28.</p>
                <p className="activityDescription">
                  Objetivo: Criar um DICIONÁRIO ILUSTRADO com os principais conceitos de Ecologia.
                  <br />
                  Assunto: ECOLOGIA.
                  <br />
                  Opinião: A atividade foi interessante e ajudou a consolidar os principais conceitos de Ecologia. 
                  Apesar de ser um pouco longa, o trabalho em grupo facilitou a compreensão dos temas.
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