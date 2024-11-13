import { useState } from 'react';
import '../CssPages/Atividades.css';
import Navbar from '../../components/Navbar.tsx';
import roteiro from '../../img/Estrutura_de_Dados-Certificado_digital_1455919.pdf'

const BancoDeDados = () => {
    const [selectedTrimester, setSelectedTrimester] = useState(2);

    const handleTrimesterChange = (trimester: number) => {
        setSelectedTrimester(trimester);
    };

    return (
        <div>
            <Navbar />
            <div className="activityPage">
                <h1 className="header">Banco de Dados</h1>
                <div className="sideNav">
                    <button onClick={() => handleTrimesterChange(1)}>1° Trimestre</button>
                    <button onClick={() => handleTrimesterChange(2)}>2° Trimestre</button>
                    <button onClick={() => handleTrimesterChange(3)}>3° Trimestre</button>
                </div>
                <div className="activitiesSection">
                    {selectedTrimester === 1 && (
                        <div>
                            <h2>Não possui 1° Trimestre</h2>
                        </div>
                    )}
                    {selectedTrimester === 2 && (
                        <div>
                            <h2>2° Trimestre</h2>
                            <div className="activity">
                                <p>
                                    <a href="https://docs.google.com/document/d/1GKmfEXeA5__gmcG0OCVPPUPx7Ay94taUJFy9UvFrXUA/edit?usp=sharing">
                                        Lista de Exercícios - Modelo Lógico 03/07
                                    </a>
                                </p>
                                <iframe
                                    loading="lazy"
                                    src="https://docs.google.com/document/d/1GKmfEXeA5__gmcG0OCVPPUPx7Ay94taUJFy9UvFrXUA/pub?embedded=true"
                                    allowFullScreen
                                ></iframe>
                                <p className="activityDetails">
                                    Competência: Não informado.
                                    <br />
                                    Habilidade: H1 e H2.
                                </p>
                                <p className="activityDescription">
                                    Objetivo: Praticamos os conceitos aprendidos na aula anterior sobre a modelagem lógica de um banco de dados, respondendo
                                    uma lista de exercícios sobre o modelo lógico.
                                    <br />
                                    Opinião: Eu ainda me lembrava um pouco do ano passado que trabalhomos isso com o Jackson e gosto muito da disciplina
                                    banco de dados pois acho essencial para um bom sistema funcionar hoje em dia. A atividade em si foi sobre modelo
                                    lógico que é a base para começar a desenvolver um banco de dados bem estruturado, então foi uma atividade muito
                                    legal de se fazer.
                                </p>
                            </div>
                            <div className="activity">
                                <p>
                                    <a href="https://www.canva.com/design/DAGKihlJVro/y-9A9FRmE67RJo6MxVDjNQ/view?utm_content=DAGKihlJVro&utm_campaign=designshare&utm_medium=link&utm_source=editor">
                                        Modelagem Sistema de Gestão de Consultório Médico 09/07
                                    </a>
                                </p>
                                <iframe
                                    loading="lazy"
                                    src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGKihlJVro&#x2F;TMKhAV2xP2qxP5N8VVFZXA&#x2F;view?embed"
                                    allowFullScreen
                                ></iframe>
                                <p className="activityDetails">
                                    Competência: Não informado.
                                    <br />
                                    Habilidade: H1 e H2.
                                </p>
                                <p className="activityDescription">
                                    Objetivo: Fazer um modelo lógico e conseitual de um banco de dados para um sistema para gerenciar
                                    pacientes, médicos, agendamentos e salas de consulta.
                                    <br />
                                    Opinião: Essa atividade serviu mais para eu e meu time irmos atrás do conteúdo e aprender de vez a como fazer um modelo lógico
                                    e conceitual de um banco de dados, a premissa de ser uma conversa com a professora foi muito boa pois ficou
                                    mais facíl de explicar nossos modelos para ela
                                </p>
                            </div>
                            <div className="activity">
                                <p>
                                    <a href="https://docs.google.com/document/d/1YIj2xiMVkOx1UmjTJNwh2GHBIxslhGo6W4yd22bQGDo/edit?usp=sharing">
                                    Pesquisa Normalização de dados 06/08
                                    </a>
                                </p>
                                <iframe
                                    loading="lazy"
                                    src={roteiro}
                                    allowFullScreen
                                ></iframe>
                                <p className="activityDetails">
                                    Competência: Não informado.
                                    <br />
                                    Habilidade: H3.    
                                </p>
                                <p className="activityDescription">
                                    Objetivo: Fizemos uma pesquisa guiada sobre normalização de dados e suas 3 formas normais, para que 
                                    possamos começar a construir um banco físico.   
                                    <br />
                                    Opinião: Muito legal a atividade mas pois foi preciso um busca mais aprofundada do conteúdo para poder responder as perguntas,
                                    que estavam difíceis, mas foi bom para mim assim pois eu tive que buscar e ir atrás de muitas coisas novas e aprender mais.
                                </p>
                            </div>
                        </div>
                    )}
                    {selectedTrimester === 3 && (
                        <div>
                            <h2>3° Trimestre</h2>
                            <div className="activity">

                                <p>
                                    <a href="https://docs.google.com/document/d/1kRWL-PbW5ir5jrfee31rie5tERfk7gqQft5oebwgRr4/edit?usp=sharing">
                                     Banco de dados - aula 10 - Banco de Dados Biblioteca
                                    </a>
                                </p>
                                <iframe
                                    loading="lazy"
                                    src="https://docs.google.com/document/d/e/2PACX-1vQbc3LJTkUuAY-qP2-wrBkhXy_nvWa0vu49Z8r5OdAYKQt19oRZluufYCg1-kkkpdol9SNbAS28YGCO/pub?embedded=true"
                                    allowFullScreen
                                ></iframe>
                                <p className="activityDetails">
                                    Competência: Não informado.
                                    <br />
                                    Habilidade: H4
                                </p>
                                <p className="activityDescription">
                                    Objetivo: Realizar a atividade seguindo o roteiro para criar um banco de dados para uma biblioteca.
                                    <br />
                                    Opinião: Atividade bem legal pois fizemos um banco de dados físico para uma biblioteca
                                    e foi um bom treino para esse conteúdo pois ia cair no SAEP e era o tema do SAEP passado
                                    fazer a construção de um sistema para uma biblioteca.
                                </p>
                            </div>

                            <div className="activity">
                                <p>
                                    <a href="https://classroom.google.com/c/NjI4MjE3OTgxMDE1/a/Njg2NDE4MTE0Mjcw/details">
                                        Banco de Dados - Left e Right JOIN + PgAdmin
                                    </a>
                                </p>
                                <iframe
                                    loading="lazy"
                                    src="https://docs.google.com/document/d/e/2PACX-1vT70-vEw5ky4yw2F1sQzony7RJAaRrHM2MEICPxWJP4TNhrWGhWHsrKOy3MQNS9lWMFNwDpz4m9LOTk/pub?embedded=true"
                                    allowFullScreen
                                ></iframe>
                                <p className="activityDetails">
                                    Competência: Não informado.
                                    <br />
                                    Habilidade: H4 e H5.
                                </p>
                                <p className="activityDescription">
                                    Objetivo: Fazer a atividade proposta utilizando comandos SQL e conhecer o PgAdmin.
                                    <br />
                                    Opinião: Essa atividade foi bacana de fazer pois pude treinar meus comando SQL e
                                    aprender mais sobre esse assunto.
                                </p>
                            </div>

                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BancoDeDados;
