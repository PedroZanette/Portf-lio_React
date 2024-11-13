import { useState } from 'react';
import '../CssPages/Atividades.css';
import Navbar from '../../components/Navbar.tsx';
import Linguagens_1 from '../../img/LINGUAGENS1.png'
import Linguagens_2 from '../../img/Linguagens2.png'
import Linguagens_3 from '../../img/linguagens3.png'
import Manutencao from '../../img/image.png'
import Redacao from '../../img/Redações enviadas.pdf'
import Redacao3 from '../../img/Redações enviadas-3.pdf'

const Linguagens = () => {
    const [selectedTrimester, setSelectedTrimester] = useState(1);

    const handleTrimesterChange = (trimester: number) => {
        setSelectedTrimester(trimester);
    };

    return (
        <div>
            <Navbar />
            <div className="activityPage">
                <h1 className="header">Linguagens</h1>
                <div className="bookGallery">
                    <div className="book">
                        <img src={Linguagens_1} alt="Capa Linguagens 1° ano" style={{ width: "20em", height: "18em" }} />
                        <div className="cover"><p style={{ fontSize: "1.7em" }}>Capa 1° ano</p></div>
                    </div>
                    <div className="book">
                        <img src={Linguagens_2} alt="Capa Linguagens 2° ano" style={{ width: "20em", height: "18em" }} />
                        <div className="cover"><p style={{ fontSize: "1.7em" }}>Capa 2° ano</p></div>
                    </div>
                    <div className="book">
                        <img src={Linguagens_3} alt="Capa Linguagens 3° ano" style={{ width: "20em", height: "18em" }} />
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
                                    <a href="https://classroom.google.com/c/NjI4MjE4MDIwMzc1/a/NjY0ODU1NjI0NjU1/details">
                                        LINGUAGENS - 21/02 - Pré-modernismo
                                    </a>
                                </p>
                                <iframe
                                    loading="lazy"
                                    src="https://www.canva.com/design/DAF9mohLDmU/LkW8hpNzlnb7Heyyt0-i0g/view?embed"
                                    allowFullScreen
                                ></iframe>
                                <p className="activityDetails">
                                    Competências e habilidades: H3, H4, H16, H22 e H24
                                </p>
                                <p className="activityDescription">
                                    Objetivo: Apresentação sobre uma obra literária Pré-modernista contendo contexto sócio-histórico, biografia do autor,
                                    e análise de poemas selecionados, relacionando com o contexto atual.
                                    <br />
                                    Opinião: Foi uma atividade interessante e descontraída, especialmente por ser no início do ano.
                                </p>
                            </div>
                            <div className="activity">
                                <p>
                                    <a href="https://classroom.google.com/c/NjI4MjE4MDIwMzc1/a/NjU1OTc1NDU2NDU1/details">
                                        LINGUAGENS - 15/03 - Simple Past: Verb to be, Regular and Irregular Verbs
                                    </a>
                                </p>
                                <iframe
                                    loading="lazy"
                                    src="../img/Simple-past.jpg"
                                    width="640"
                                    height="480"
                                    allow="fullscreen"
                                    title="Simple Past Activity"
                                ></iframe>
                                <p className="activityDetails">
                                    Competências e habilidades: H11, H25, H10 e H24
                                </p>
                                <p className="activityDescription">
                                    Objetivo: Criar uma postagem simulando redes sociais em uma cartolina, com legenda e nome de usuário fictício em inglês.
                                    <br />
                                    Opinião: Gostei da atividade por já ter experiência com inglês, mas foi um desafio criar o post manualmente.
                                </p>
                            </div>
                            <div className="activity">
                                <p>LINGUAGENS - Revista literária</p>
                                <iframe
                                    loading="lazy"
                                    src={Manutencao}
                                    width="640"
                                    height="480"
                                    allow="fullscreen"
                                    title="Revista Literária"
                                ></iframe>
                                <p className="activityDetails">
                                    Competências e habilidades: (a definir)
                                </p>
                                <p className="activityDescription">
                                    Objetivos: (a definir)
                                    <br />
                                    Assunto: (a definir)
                                    <br />
                                    Opinião: (a definir)
                                </p>
                            </div>
                        </div>
                    )}
                    {selectedTrimester === 2 && (
                        <div>
                            <h2>2° Trimestre</h2>
                            <div className="activity">
                                <p>
                                    <a href="https://classroom.google.com/c/NjI4MjE4MDIwMzc1/m/Njk3ODAzNjE5MTUw/details">
                                        LINGUAGENS - Redação Online
                                    </a>
                                </p>
                                <iframe
                                    loading="lazy"
                                    src={Redacao}
                                    allowFullScreen
                                    title="Redação Online"
                                ></iframe>
                                <p className="activityDetails">
                                    Competência: C1 - Utilizar a leitura como fonte de informação e acesso ao mundo do trabalho e estudos avançados.
                                    <br />
                                    Habilidade: H3.
                                </p>
                                <p className="activityDescription">
                                    Objetivo: Escrever uma redação no modelo ENEM.
                                    <br />
                                    Opinião: Não gosto muito de redação, mas fiquei satisfeito com a nota. Gostaria de entender melhor a correção da competência 5.
                                </p>
                            </div>
                           
                        </div>
                    )}
                    {selectedTrimester === 3 && (
                        <div>
                            <h2>3° Trimestre</h2>
                            <div className="activity">
                                <p>
                                    <a href="https://www.canva.com/design/DAGGa_KoHec/IDah-dB5seUjvYxiEDJP2Q/view?utm_content=DAGGa_KoHec&utm_campaign=designshare&utm_medium=link&utm_source=editor">
                                        Linguagens | 18/10 | Aplicação do Redação Online
                                    </a>
                                </p>
                                <iframe
                                    loading="lazy"
                                    src={Redacao3}
                                    allowFullScreen
                                ></iframe>
                                <p className="activityDetails">
                                    Competência: N/A
                                    <br />
                                    Habilidades: N/A
                                </p>
                                <p className="activityDescription">
                                    Objetivo: Realizar a 3ª aplicação da Redação Online.
                                    <br />
                                    Opinião: Foi uma ótima oportunidade de me aprimorar na redação pois o ENEM já estava perto e 
                                    essa aplicação fez com que eu conseguisse revisar como fazer uma boa redação.
                                </p>
                            </div>
                            <div className="activity">
                                <p>
                                    <a href="https://www.canva.com/design/DAGBfL1ge_g/f_aYCVi1ZuZ5QPFuHn10bw/view?embed">
                                        Currículo atualizado, em português e em inglês.
                                    </a>
                                </p>
                                <iframe
                                    loading="lazy"
                                    src="https://www.canva.com/design/DAGBfL1ge_g/f_aYCVi1ZuZ5QPFuHn10bw/view?embed"
                                    allowFullScreen
                                ></iframe>
                                <p className="activityDetails">
                                    Competência: N/A
                                    <br />
                                    Habilidades: N/A
                                </p>
                                <p className="activityDescription">
                                    Objetivo: Currículo atualizado.
                                    <br />
                                    Opinião: Fazer um currículo é muito bom principalmente para utilizar profissionalmente,
                                    por isso acho importante esse tipo de atividade pois faz com que os alunos tenham que pesquisar e
                                    fazer algo que será benéfico para o futuro.
                                </p>
                            </div>
                            <div className="activity">
                                <p>
                                    <a href="https://youtu.be/FUKHYRqQ8ww">
                                        Vídeo Daily.
                                    </a>
                                </p>
                                <p>⬆️⬆️⬆️ Acesse o link no título ⬆️⬆️⬆️</p>
                                <p className="activityDetails">
                                    Competência: N/A
                                    <br />
                                    Habilidades: N/A
                                </p>
                                <p className="activityDescription">
                                    Objetivo: Fazer um vídeo em formato daily.
                                    <br />
                                    Opinião: Ter feito esse tipo de vídeo foi divertido e interessante, pois pude analizar
                                    minha rotina e até pude melhorar ela.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Linguagens;
