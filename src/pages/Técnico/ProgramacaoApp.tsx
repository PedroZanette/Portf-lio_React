import { useState } from 'react';
import '../CssPages/Atividades.css';
import Navbar from '../../components/Navbar.tsx';
import nodeImg from '../../img/node.png'
import chalkImg from '../../img/chalk.png'

const ProgramacaoApp = () => {
    const [selectedTrimester, setSelectedTrimester] = useState(3);

    const handleTrimesterChange = (trimester: number) => {
        setSelectedTrimester(trimester);
    };

    return (
        <div>
            <Navbar />
            <div className="activityPage">
                <h1 className="header">Programação de Aplicativos</h1>
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
                            <h2>Não possui 2° Trimestre</h2>
                        </div>
                    )}
                    {selectedTrimester === 3 && (
                        <div>
                            <h2>3° Trimestre</h2>
                            <div className="activity">
                                <p>
                                    <a href="https://classroom.google.com/c/NjI4MjE3OTgxMDE1/a/Njg1OTc5ODE5MDU4/details">
                                        Atividade Express
                                    </a>
                                </p>
                                <iframe
                                    loading="lazy"
                                    src={nodeImg}
                                    allowFullScreen
                                ></iframe>
                                <p className="activityDetails">
                                    Competência: Não informado.
                                    <br />
                                    Habilidade: H1 e H2.
                                </p>
                                <p className="activityDescription">
                                    Objetivo: Criar um projeto com Express.
                                    <br />
                                    Opinião: Foi uma atividade relativamente simples mas ainda assim díficil pois
                                    express é uma tecnologia nova para mim ainda, porem gostei de como ela faz
                                    construção de servidores web sendo um framework para Node.js .
                                </p>
                            </div>
                            <div className="activity">
                               
                                <p>
                                    <a href="https://classroom.google.com/c/NjI4MjE3OTgxMDE1/a/Njg1Njk3ODY0MTY0/details">
                                        Tarefa 02
                                    </a>
                                </p>
                                <iframe
                                    loading="lazy"
                                    src={chalkImg}
                                    allowFullScreen
                                ></iframe>
                                <p className="activityDetails">
                                    Competência: Não informado.
                                    <br />
                                    Habilidade: H3 e H4.
                                </p>
                                <p className="activityDescription">
                                    Objetivo: Criar um projeto que aceite pacotes externos.
                                    <br />
                                    Opinião: Uma atividade legal para entender a utilizar pacotes externos como o chalk, e 
                                    aplicar na prática.
                                </p>
                            </div>
                        
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProgramacaoApp;
