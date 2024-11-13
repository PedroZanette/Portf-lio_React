import { useState } from 'react';
import '../CssPages/Atividades.css';
import Navbar from '../../components/Navbar.tsx';
import Humanas_1 from '../../img/HUMANAS1.png';
import Humanas_2 from '../../img/Humanas2.png';
import Humanas_3 from '../../img/Humanas 3ano.png';

const Humanas = () => {
    const [selectedTrimester, setSelectedTrimester] = useState(1);

    const handleTrimesterChange = (trimester: number) => {
        setSelectedTrimester(trimester);
    };

    return (
        <div>
            <Navbar />
            <div className="activityPage">
                <h1 className="header">Humanas</h1>
                <div className="bookGallery">
                    <div className="book">
                        <img src={Humanas_1} alt="Capa Humanas 1° ano" style={{ width: "20em", height: "18em" }} />
                        <div className="cover"><p style={{ fontSize: "1.7em" }}>Capa 1° ano</p></div>
                    </div>
                    <div className="book">
                        <img src={Humanas_2} alt="Capa Humanas 2° ano" style={{ width: "20em", height: "18em" }} />
                        <div className="cover"><p style={{ fontSize: "1.7em" }}>Capa 2° ano</p></div>
                    </div>
                    <div className="book">
                        <img src={Humanas_3} alt="Capa Humanas 3° ano" style={{ width: "20em", height: "18em" }} />
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
                                    <a href="https://www.canva.com/design/DAF-i9Hdbgk/oFzT_6jFB_MTdSsGFKglPg/view?utm_content=DAF-i9Hdbgk&utm_campaign=designshare&utm_medium=link&utm_source=editor">
                                        HUMANAS - 04/03 - Imperialismo no séc. XIX (Neocolonialismo)
                                    </a>
                                </p>
                                <iframe
                                    loading="lazy"
                                    src="https://www.canva.com/design/DAF-i9Hdbgk/GuEBJO6naklVvnc0yJf7zw/view?embed"
                                    allowFullScreen
                                ></iframe>
                                <p className="activityDetails">
                                    Competência: C6 - Avaliar a sociedade como um sistema complexo, estruturado sob os aspectos políticos, econômicos, sociais e geoambientais.
                                    <br />
                                    Habilidade: H39
                                </p>
                                <p className="activityDescription">
                                    Nessa atividade escolhemos um país que sofreu com o processo de colonização após a 2ª Revolução Industrial e contamos sua trajetória por meio de fotos, mapas e desenhos.
                                    <br />
                                    Opinião: Achei muito interessante, pois pude escolher um país africano desconhecido e explorar sua história, o que me ajudou a refletir mais sobre o passado dos países africanos.
                                </p>
                            </div>
                            <div className="activity">
                                <p>
                                    <a href="https://docs.google.com/presentation/d/e/2PACX-1vQINxGp31jKJ0k2uSwiov_9Oyo2ujqSrGZBnSGUg1Nd-w0dNAyw9Hpt-HPf-TJCy7X81Tg4xTxtMX1p/embed?start=false&loop=false&delayms=3000">
                                        HUMANAS - 05/02 - Introdução à Geopolítica
                                    </a>
                                </p>
                                <iframe
                                    loading="lazy"
                                    src="https://docs.google.com/presentation/d/e/2PACX-1vQINxGp31jKJ0k2uSwiov_9Oyo2ujqSrGZBnSGUg1Nd-w0dNAyw9Hpt-HPf-TJCy7X81Tg4xTxtMX1p/embed?start=false&loop=false&delayms=3000"
                                    allowFullScreen
                                ></iframe>
                                <p className="activityDetails">
                                    Competência: C2 - Compreender a importância do trabalho na constituição das sociedades e na formação dos sujeitos.
                                    <br />
                                    Habilidades: H8, H10, H12
                                </p>
                                <p className="activityDescription">
                                    Objetivo: Introduzir os estudos de geopolítica de uma forma descontraída em preparação para nosso seminário.
                                    <br />
                                    Opinião: Gostei de pesquisar sobre Montenegro, um país pequeno e pouco conhecido, o que exigiu uma pesquisa mais aprofundada para a apresentação.
                                </p>
                            </div>
                            <div className="activity">
                                <p>
                                    <a href="https://docs.google.com/document/d/e/2PACX-1vQwlXghSiEchIMuwQM4BTWvXeKlRZkxT76bMFhwLSFqnByGkjWK585Z2JHHlhhrxVCoAAVswFMnNwsA/pub?embedded=true">
                                        HUMANAS - 04/03 - Imperialismo no séc. XIX (Neocolonialismo)
                                    </a>
                                </p>
                                <iframe
                                    loading="lazy"
                                    src="https://docs.google.com/document/d/e/2PACX-1vQwlXghSiEchIMuwQM4BTWvXeKlRZkxT76bMFhwLSFqnByGkjWK585Z2JHHlhhrxVCoAAVswFMnNwsA/pub?embed"
                                    allowFullScreen
                                ></iframe>
                                <p className="activityDetails">
                                    Competência: C3 - Compreender o ser humano como agente de transformação dos espaços e territórios.
                                    <br />
                                    Habilidades: H15, H16
                                </p>
                                <p className="activityDescription">
                                    Objetivo: Relacionar o imperialismo com a escalada de tensões que culminou na Grande Guerra.
                                    <br />
                                    Opinião: O filme “1917” foi muito bom, e a atividade trouxe reflexões sobre o período da guerra.
                                </p>
                            </div>
                        </div>
                    )}
                    {selectedTrimester === 2 && (
                        <div>
                            <h2>2° Trimestre</h2>
                            <div className="activity">
                                <p>
                                    <a href="https://www.canva.com/design/DAGGa_KoHec/IDah-dB5seUjvYxiEDJP2Q/view?utm_content=DAGGa_KoHec&utm_campaign=designshare&utm_medium=link&utm_source=editor">
                                        HUMANAS - 27/05 - Urbanismo e cultura no começo do século XX.
                                    </a>
                                </p>
                                <iframe
                                    loading="lazy"
                                    src="https://www.canva.com/design/DAGGa_KoHec/x2osYcWeFaWP6tQsM2foFg/view?embed"
                                    allowFullScreen
                                ></iframe>
                                <p className="activityDetails">
                                    Competência: C4 - Compreender a importância do trabalho na constituição das sociedades e na formação dos sujeitos.
                                    <br />
                                    Habilidades: H22, H24
                                </p>
                                <p className="activityDescription">
                                    Objetivo: Pesquisar fotos do banco de dados Brasiliana Fotográfica para criar uma história com elas.
                                    <br />
                                    Opinião: Escolher fotos antigas foi desafiador, mas interessante. Consegui criar uma história sobre o Hospital Oswaldo Cruz.
                                </p>
                            </div>
                            <div className="activity">
                                <p>
                                    <a href="https://www.canva.com/design/DAGHFFtSmvI/GexqMFdKnY-c4BsqzlX3Pg/view?utm_content=DAGHFFtSmvI&utm_campaign=designshare&utm_medium=link&utm_source=editor">
                                        HUMANAS - 10/06 - Apresentações Cinema e totalitarismo
                                    </a>
                                </p>
                                <iframe
                                    loading="lazy"
                                    src="https://www.canva.com/design/DAGHFFtSmvI/9ZdCwZgRDHuNtkGBYjRozA/view?embed"
                                    allowFullScreen
                                ></iframe>
                                <p className="activityDetails">
                                    Competência: C4 - Compreender a importância do trabalho na constituição das sociedades e na formação dos sujeitos.
                                    <br />
                                    Competência: C6 - Avaliar a sociedade como um sistema complexo sob aspectos políticos, econômicos, sociais e geoambientais.
                                    <br />
                                    Habilidades: H10, H39
                                </p>
                                <p className="activityDescription">
                                    Objetivo: Analisar um filme sobre totalitarismo e apresentar as descobertas.
                                    <br />
                                    Opinião: A atividade foi interessante, pois escolhemos o filme "Duna" que possui elementos de totalitarismo, mas de forma implícita.
                                </p>
                            </div>
                        </div>
                    )}
                    {selectedTrimester === 3 && (
                        <div>
                            <h2>3° Trimestre</h2>
                            <div className="activity">
                                <p>
                                    <a href="https://www.canva.com/design/DAGSO2g0m0M/Vb09golgF0SgfwCRyD0VDg/view?embed">
                                        HUMANAS - 30/09 - Guerra Fria
                                    </a>
                                </p>
                                <iframe
                                    loading="lazy"
                                    src="https://www.canva.com/design/DAGSO2g0m0M/Vb09golgF0SgfwCRyD0VDg/view?embed"
                                    allowFullScreen
                                ></iframe>
                                <p className="activityDetails">
                                    Competência:  C6 e C5 
                                    <br />
                                    Habilidades: H28, H30, H32, H39 e H40
                                </p>
                                <p className="activityDescription">
                                    Objetivo: Realizar uma pesquisa e construir uma apresentação no Canva capaz de explicar a complexidade de conflitos, disputas, guerras, acordos e sentimentos relacionados à Guerra Fria.
                                    <br />
                                    Opinião: Uma atividade bem legal pois gosto do tema Guerra Fria e acho muito interessante como ela 
                                    moldou o nosso presente, além de que pesquisar sobre os conflitos da Guerra foi bom para 
                                    que eu pudesse me aprofundar nesse tema.
                                </p>
                            </div>
                            <div className="activity">
                                <p>
                                    <a href="https://docs.google.com/document/d/e/2PACX-1vSZUORiJjfuaiRppLZhsN9edFdAmJHiYiNs6Duvh77oxa6GtBgZHVR7iOEiECmxFAn4n42nNQWF0GnC/pub?embedded=true">
                                     HUMANAS - 21/10 - As tensões políticas do suicídio de Vargas até o fim do governo Jango.
                                    </a>
                                </p>
                                <iframe
                                    loading="lazy"
                                    src="https://docs.google.com/document/d/e/2PACX-1vSZUORiJjfuaiRppLZhsN9edFdAmJHiYiNs6Duvh77oxa6GtBgZHVR7iOEiECmxFAn4n42nNQWF0GnC/pub?embedded=true"
                                    allowFullScreen
                                ></iframe>
                                <p className="activityDetails">
                                    Competência: C2 H10 C6 H39
                                    <br />
                                    Competência: C6 - Avaliar a sociedade como um sistema complexo sob aspectos políticos, econômicos, sociais e geoambientais.
                                    <br />
                                    Habilidades: H10, H34, H35 e H39
                                </p>
                                <p className="activityDescription">
                                    Objetivo: Fazer a leitura e discussão sobre uma reportagem da BBC sobre o Massacre de Manguinhos e escolha um dos cientistas perseguidos e escrever um dossiê sobre sua vida e carreira.
                                    <br />
                                    Opinião: Foi uma atividade muito legal pois particulamente gosto de política, então
                                    ver sobre as antigas presidencias acabou sendo mais marcante, em especial esse caso do Massacre de Manguinhos 
                                    já que a partir dai podemos ter uma visão de como era a política na época e pesquisando sobre Moacyr Vaz de Andrade
                                    foi ainda mais complementar quando olhando sobre como era a vida de um "opositor".
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Humanas;
