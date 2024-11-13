import { useState } from 'react';
import '../CssPages/Atividades.css';
import Navbar from '../../components/Navbar.tsx';

const Modelagem = () => {
    const [selectedTrimester, setSelectedTrimester] = useState(1);

    const handleTrimesterChange = (trimester: number) => {
        setSelectedTrimester(trimester);
    };

    return (
        <div>
            <Navbar />
            <div className="activityPage">
                <h1 className="header">Modelagem de Sistemas</h1>
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
                                    <a href="https://docs.google.com/spreadsheets/d/1pN2ldEnHwP-fTeyR9M1V9z5tyjMpS1YPQyft4lG1ZAs/edit?usp=sharing">
                                     S.A - Regra de Negócio 12/03
                                    </a>
                                </p>
                                <iframe
                                    loading="lazy"
                                    src="https://docs.google.com/spreadsheets/d/1pN2ldEnHwP-fTeyR9M1V9z5tyjMpS1YPQyft4lG1ZAs/pubhtml?widget=true&amp;headers=false"
                                    allowFullScreen
                                ></iframe>
                                <p className="activityDetails">
                                    Competência: Não informado.
                                    <br />
                                    Habilidade: H2, H3, H4 e H8.
                                </p>
                                <p className="activityDescription">
                                    Objetivo: Baseando-se no  brainstorm  construído em uma das aulas, desenvolvemos as regras de negócio da nossa solução.
                                    <br />
                                    Opinião: Eu e meu time gostamos bastante de montar as regras de negócio pois são úteis para o desenvolvimento da S.A, 
                                    e nos ajudou em pensar nas melhorias futuras e em como montar de maneira eficiente nossa ideia.
                                </p>
                            </div>
                            <div className="activity">
                                <p>
                                    <a href="https://www.figma.com/design/TgoKAbuPMZ022WJczc2pFc/Site-Inicia%C3%A7%C3%A3o-Cient%C3%ADfica---M%C3%A9dia-Fidelidade-S.A?node-id=47-108&t=MUVwP8LcYvqxBeox-1">
                                        S.A - Wireframe de Alta Fidelidade 17/04
                                    </a>
                                </p>
                                <iframe
                                    loading="lazy"
                                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FTgoKAbuPMZ022WJczc2pFc%2FSite-Inicia%25C3%25A7%25C3%25A3o-Cient%25C3%25ADfica---M%25C3%25A9dia-Fidelidade-S.A%3Fnode-id%3D47-108%26t%3DMUVwP8LcYvqxBeox-1"
                                    allowFullScreen
                                ></iframe>
                                <p className="activityDetails">
                                    Competência: Não informado.
                                    <br />
                                    Habilidade: H2, H3, H4 E H5
                                </p>
                                <p className="activityDescription">
                                    Objetivo: Criar protótipos finais e interativos no Figma, baseando-nos nos wireframes anteriores e na identidade visual da aula feita sobre indentidade visual.
                                    <br />
                                    Opinião: Gostei de fazer no figma o wireframe pois pude já ter uma noção e base muito grande para eu e meu time começar 
                                    a desenvolver nosso projeto, tanto que já até fizemos melhorias com base nesse wireframe de alta fidelidade.
                                </p>
                            </div>
                            
                        </div>
                    )}
                    {selectedTrimester === 2 && (
                        <div>
                            <h2>2° Trimestre</h2>
                            <div className="activity">
                                <p>
                                    <a href="https://www.canva.com/design/DAGEjmWgWCc/ieq0vEMs8OynbOarECRVgQ/view?utm_content=DAGEjmWgWCc&utm_campaign=designshare&utm_medium=link&utm_source=editor">
                                    Sala de Aula Invertida - Metodologias de Desenvolvimento 07/05

                                    </a>
                                </p>
                                <iframe
                                    loading="lazy"
                                    src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGEjmWgWCc&#x2F;eDPIduD446Ie5oGNZVNk3Q&#x2F;view?embed"
                                    allowFullScreen
                                ></iframe>
                                <p className="activityDetails">
                                   
                                    Competência: Não informado.
                                    <br />
                                    Habilidade: H3, H5 e H8.
                                </p>
                                <p className="activityDescription">
                                   
                                    Objetivo: Realizar uma atividade no modelo Sala de Aula Invertida, com as metodologias de desenvolvimento de software
                                    vistas em sala. 
                                    <br />
                                    Opinião: Gostei muito dessa atividade pois apresentei sobre o DevOps e gostei muito de estudar sobre essa
                                    metodologia de desenvolvimento de software.
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

export default Modelagem;
