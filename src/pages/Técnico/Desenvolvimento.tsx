import { useState } from 'react';
import '../CssPages/Atividades.css';
import Navbar from '../../components/Navbar.tsx';
import calculadora from '../../img/calculadora.png'
import postman from '../../img/postman.png'
import biblioteca from '../../img/Captura de tela 2024-08-15 211530.png'

const Desenvolvimento = () => {
    const [selectedTrimester, setSelectedTrimester] = useState(1);

    const handleTrimesterChange = (trimester: number) => {
        setSelectedTrimester(trimester);
    };

    return (
        <div>
            <Navbar />
            <div className="activityPage">
                <h1 className="header">Desenvolvimento de Sistemas</h1>
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
                                    <a href="https://classroom.google.com/c/NjI4MjE3OTgxMDE1/m/NjU1NDU3MTgxNzQx/details">
                                        Calculadora de Horas em react
                                    </a>
                                </p>
                                <iframe
                                    loading="lazy"
                                    src={calculadora}
                                    allowFullScreen
                                ></iframe>
                                <p className="activityDetails">

                                    Competência: Não informado.
                                    <br />
                                    Habilidade: Não informado.
                                </p>
                                <p className="activityDescription">

                                    Objetivo: Fazer uma calculadora de horas com react.
                                    <br />
                                    Opinião: Nessa atividade fizemos uma calculadora de horas em React, foi legal pois era uma assunto que eu ainda tinha
                                    dúvida e nessa aula foi a introdução dele, nessa atividade gostei de montar do meu jeito então ficou legal além
                                    de ela funcionar.
                                </p>
                            </div>
                            <div className="activity">
                                <p>
                                    API - CEP
                                </p>
                                <iframe
                                    loading="lazy"
                                    src={postman}
                                    allowFullScreen
                                ></iframe>
                                <p className="activityDetails">

                                    Competência: Não informado.
                                    <br />
                                    Habilidade: Não informado.
                                </p>
                                <p className="activityDescription">
                                    Objetivo: Aprender a usar uma API que busca CEP
                                    <br />
                                    A atividade foi aprender a usar a API para buscar o CEP, foi bem bacana pois era algo simples e facíl de se
                                    usar, aprender sobre API foi legal e consegui absorver bastante coisa da aula que teve, no caso da imagem nós
                                    tivemos que depois de usada a API, buscamos no Postman que com o link da API quais as informações existiam.
                                </p>
                            </div>
                            <div className="activity">
                                <p>
                                    <a href="https://www.canva.com/design/DAF95gz0wTw/QyoMSMFtZCC0hW_7BN8rNQ/view?utm_content=DAF95gz0wTw&utm_campaign=designshare&utm_medium=link&utm_source=editor">
                                        Trabalho API
                                    </a>
                                </p>
                                <iframe
                                    loading="lazy"
                                    src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAF95gz0wTw&#x2F;G_1-aQAzdzLn4NqJohVuPQ&#x2F;view?embed"
                                    allowFullScreen
                                ></iframe>
                                <p className="activityDetails">
                                    Competência: Não informado.
                                    <br />
                                    Habilidade: H3, H4, H5, H6, H9 E H10.
                                </p>
                                <p className="activityDescription">
                                    Objetivo: Realizar a montagem de grupos, realizar uma pesquisa sobre os seguintes conceitos:
                                    Tipos de API(Restful, SOAP, GraphQL, etc);
                                    Ferramentas (Postman, Swagger);
                                    Verbos HTTP (Post, Put, Get, Delete, etc);
                                    Formato de dados (json e xml);
                                    Diferenças de http e https.
                                    <br />
                                    Objetivos: Gosto de apresentações e essa não foi diferente, curti fazer ela pois tive que aprender e fixar bem os conceitos de API
                                    e depois dessa atividade posso diver que aprendi o que é uma API.
                                </p>
                            </div>
                        </div>
                    )}
                    {selectedTrimester === 2 && (
                        <div>
                            <h2>2° Trimestre</h2>
                            <div className="activity">

                                <p>
                                    <a href="https://drive.google.com/file/d/1Ytz0ufTlEgf9UCVpiOdxzhtovrgxlnKz/view?usp=sharing">
                                        Projeto Biblioteca 17/06 - 18/06
                                    </a>
                                </p>
                                <iframe
                                    loading="lazy"
                                    src={biblioteca}
                                    allowFullScreen
                                ></iframe>
                                <p className="activityDetails">
                                    Competência: Não informado.
                                    <br />
                                    Habilidade: Não informado.
                                </p>
                                <p className="activityDescription">
                                    Objetivo: Atividade individual ou em grupo de no máximo 4 alunos para o desenvolvimento de
                                    um sistema Back-End para uma biblioteca.
                                    <br />
                                    Opinião: Com certeza java se tornou uma das linguagens de programação mais difíceis do mundo após essa e outras atividades e
                                    posso dizer com clareza que foi uma das coisas mais difíceis do ano inteiro e acho que só não supera a S.A, o Portfólio
                                    e outra atividade que teve.
                                </p>
                            </div>

                        </div>
                    )}
                    {selectedTrimester === 3 && (
                        <div>
                            <h2>Não possui 3° Trimestre</h2>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Desenvolvimento;
