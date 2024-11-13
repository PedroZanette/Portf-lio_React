import { useState } from 'react';
import '../CssPages/Atividades.css';
import Navbar from '../../components/Navbar.tsx';

const TesteDeSistemas = () => {
    const [selectedTrimester, setSelectedTrimester] = useState(1);

    const handleTrimesterChange = (trimester: number) => {
        setSelectedTrimester(trimester);
    };

    return (
        <div>
            <Navbar />
            <div className="activityPage">
                <h1 className="header">Testes de Sistemas</h1>
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
                                    <a href="URL_da_atividade_1">Título da Atividade - Descrição da Data ou Tema</a>
                                </p>
                                <iframe
                                    loading="lazy"
                                    src="URL_do_embbed_ou_iframe_da_atividade"
                                    allowFullScreen
                                ></iframe>
                                <p className="activityDetails">
                                   
                                    Competência: Descreva a competência
                                    <br />
                                    Habilidade: Habilidade específica da atividade
                                </p>
                                <p className="activityDescription">
                                   
                                    Objetivo: Descreva o objetivo da atividade.
                                    <br />
                                    Opinião: Compartilhe sua opinião ou experiência com a atividade.
                                </p>
                            </div>
                           
                        </div>
                    )}
                    {selectedTrimester === 2 && (
                        <div>
                            <h2>2° Trimestre</h2>
                            <div className="activity">
                               
                                <p>
                                    <a href="URL_da_atividade_2">Título da Atividade - Descrição da Data ou Tema</a>
                                </p>
                                <iframe
                                    loading="lazy"
                                    src="URL_do_embbed_ou_iframe_da_atividade"
                                    allowFullScreen
                                ></iframe>
                                <p className="activityDetails">
                                    Competência: Descreva a competência
                                    <br />
                                    Habilidade: Habilidade específica da atividade
                                </p>
                                <p className="activityDescription">
                                    Objetivo: Descreva o objetivo da atividade.
                                    <br />
                                    Opinião: Compartilhe sua opinião ou experiência com a atividade.
                                </p>
                            </div>
                        
                        </div>
                    )}
                    {selectedTrimester === 3 && (
                        <div>
                            <h2>3° Trimestre</h2>
                            <div className="activity">
                               
                                <p>
                                    <a href="URL_da_atividade_3">Título da Atividade - Descrição da Data ou Tema</a>
                                </p>
                                <iframe
                                    loading="lazy"
                                    src="URL_do_embbed_ou_iframe_da_atividade"
                                    allowFullScreen
                                ></iframe>
                                <p className="activityDetails">
                                    Competência: Descreva a competência
                                    <br />
                                    Habilidade: Habilidade específica da atividade
                                </p>
                                <p className="activityDescription">
                                    Objetivo: Descreva o objetivo da atividade.
                                    <br />
                                    Opinião: Compartilhe sua opinião ou experiência com a atividade.
                                </p>
                            </div>
                        
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TesteDeSistemas;
