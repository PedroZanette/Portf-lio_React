import { useState } from 'react';
import '../CssPages/Atividades.css';
import Navbar from '../../components/Navbar.tsx';

const TesteDeSistemas = () => {
    const [selectedTrimester, setSelectedTrimester] = useState(3);

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
                                    <a href="https://www.canva.com/design/DAGWgJyvym8/y47wFLEk8DOeraMsMynF2A/view?embed">
                                        Título da Atividade - Descrição da Data ou Tema
                                        </a>
                                </p>
                                <iframe
                                    loading="lazy"
                                    src="https://www.canva.com/design/DAGWgJyvym8/y47wFLEk8DOeraMsMynF2A/view?embed"
                                    allowFullScreen
                                ></iframe>
                                <p className="activityDetails">
                                    Competência: Não informado.
                                    <br />
                                    Habilidade: Habilidade específica da atividade
                                </p>
                                <p className="activityDescription">
                                    Objetivo: Fazer uma aprentação resumindo o que foi visto ao longo do terceiro trimestre.
                                    <br />
                                    Opinião: Teste de Sistemas foi uma matéria nova e com pouco tempo de duração, mas 
                                    já pude entender sua importância e gostei de como posso utilizá-la para resolver 
                                    problemas que poderiam me atrapalhar no futuro como programador. A atividade 
                                    em si foi interessante de realizar, pois precisei revisar mais uma vez os 
                                    tipos de testes e como utilizá-los da melhor forma.
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
