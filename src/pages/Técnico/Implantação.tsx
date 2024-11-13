import { useState } from 'react';
import '../CssPages/Atividades.css';
import Navbar from '../../components/Navbar.tsx';

const Implantação = () => {
    const [selectedTrimester, setSelectedTrimester] = useState(1);

    const handleTrimesterChange = (trimester: number) => {
        setSelectedTrimester(trimester);
    };

    return (
        <div>
            <Navbar />
            <div className="activityPage">
                <h1 className="header">Implantação e Manutenção de Sistemas</h1>
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
                                    <a href="https://docs.google.com/document/d/1lBdz4DDRAu6q3LVFnu3Hb1BiU3Wx51dkE5PlHmjDc1o/edit?usp=sharing">
                                    Cenário 1/Atividade 1 - Método de Implantação -- Implantação de um Sistema Para Gerenciamento de Conteúdo - CMS -
                                    </a>
                                </p>
                                <iframe
                                    loading="lazy"
                                    src="https://docs.google.com/document/d/1_vrQZkhbZH49Kt7Kdx1CClMY9qG7qi_JLxnMNww3lWg/pub?embedded=true" 
                                    allowFullScreen
                                ></iframe>
                                <p className="activityDetails">
                                   
                                    Competência: Não informado.
                                    <br />
                                    Habilidade: Não informado.
                                </p>
                                <p className="activityDescription">
                                   
                                    Objetivo: Analisar as informações técnicas do sistema para a empresa Veículos Brasil 
                                    e propor uma instalação, justificando se será on-premise ou em Cloud.
                                    <br />
                                    Opinião: Achei legal a ideia mas muito complicado para um ínicio mas em resumo foi legal esse cenário apresentado,
                                    e aprender sobre instalação de sistemas foi muito bacana.
                                </p>
                            </div>
                           
                        </div>
                    )}
                    {selectedTrimester === 2 && (
                        <div>
                            <h2>Não possui 2° Trimestre</h2>
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

export default Implantação;
