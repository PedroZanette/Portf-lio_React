import { useCallback } from 'react';
import './CssPages/Home.css';
import Navbar from '../components/Navbar';
import Foto from '../img/pedroZanette.png'

const Home = () => {
    const openFirstPortfolio = useCallback(() => {
        window.open(
            'https://www.canva.com/design/DAFIrJ1nLAU/OHA_1VOBY-DqIb9CVvJTnw/view?utm_content=DAFIrJ1nLAU&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink'
        );
    }, []);

    const openSecondPortfolio = useCallback(() => {
        window.open(
            'https://www.canva.com/design/DAFfLdBqgK8/5zAvhBxLShcO9EhYAOFpBg/view?utm_content=DAFfLdBqgK8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink'
        );
    }, []);

    return (
        <div>
            <Navbar />
        
            
            <div className="page-content-home">
                <div className="text" style={{ display: 'flex', alignItems: 'center' }}>
                    <div >
                        <h2 className="h2" style={{ fontSize: '550%', fontFamily: 'Andale Mono, monospace' }}>
                            Sobre Mim
                        </h2>
                        <p className="text-me">
                            Com prazer, sou Pedro Henrique Nunes Zanette, com 18 anos, atualmente cursando o terceiro ano do ensino médio
                            técnico em Desenvolvimento de Sistemas no SesiSenai. Tenho me destacado notavelmente nesta área desde o meu
                            primeiro ano, alimentando meu interesse e buscando aprimoramento constante. Minha experiência anterior como
                            garçom em um restaurante me proporcionou habilidades sólidas de trabalho em equipe e comunicação,
                            complementadas por um inglês quase avançado. Além disso, sou membro ativo de um grupo científico voltado à
                            tecnologia, sendo a Iniciação Científica do SesiSenai. Estou empenhado em aprimorar minhas habilidades de
                            programação com a orientação de programadores experientes. Agradeço a todos que dedicaram seu tempo para ler, e
                            envio um caloroso abraço a vocês!
                        </p>
                    </div>
                    <img
                        src ={Foto}
                        alt="Pedro Henrique Nunes Zanette"
                        style={{ width: '40vw', height: '90vh', marginLeft: '20px' }}
                    />
                </div>

                <div className="text-2">
                    <h2 className="h2" style={{ fontSize: '550%', fontFamily: 'Andale Mono, monospace' }}>
                        Quem sou eu?
                    </h2>
                    <iframe
                        className="iframe-2"
                        src="https://docs.google.com/document/d/e/2PACX-1vQQiCW95SkuLpDT0YbGbmqT90152wMJLsPu66zqvmJMKCyv9ANbnDsu8MidjpqaZ0nNNMYqbr0YyxC1/pub?embedded=true"
                        title="Sobre Mim - Google Document"
                    />
                </div>

                <div className="text-3">
                    <h1 className="h1-p">Portfólios do 1° e 2° ano</h1>
                    <div style={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center', gap: '2rem', padding: '2rem' }}>
                        <button className="buton-port2" onClick={openSecondPortfolio}>
                            Portfólio 2° ano
                        </button>
                        <button className="buton-port1" onClick={openFirstPortfolio}>
                            Portfólio 1° ano
                        </button>
                    </div>
                </div>

                <br /><br /><br /><br /><br />

                <div className="table" style={{ marginBottom: '0px' }}>
                    <h1 style={{ fontSize: '10em' }}>Cronograma</h1>
                    <br />

                    <div style={{ backgroundColor: 'rgba(164, 164, 164, 1)' }}>
                        <table border={5} cellSpacing={0} align="center">
                            {/* Inicio do Cronograma */}
                            <thead>
                                <tr>
                                    <td align="center" height={50} width={100}>
                                        <br />
                                        <b>Dia/Periodo</b>
                                        <br />
                                    </td>
                                    <td align="center" height={50} width={100}>
                                        <b>
                                            I
                                            <br />
                                            7:35-10:05
                                        </b>
                                    </td>
                                    <td align="center" height={50} width={100}>
                                        <b>
                                            II
                                            <br />
                                            10:20-12:50
                                        </b>
                                    </td>
                                    <td align="center" height={50} width={100}>
                                        <b>
                                            III
                                            <br />
                                            13:30-14:50
                                        </b>
                                    </td>
                                    <td align="center" height={50} width={100}>
                                        <b>15:00-17:30</b>
                                    </td>
                                    <td align="center" height={50} width={100}>
                                        <b>
                                            IV
                                            <br />
                                            17:30-19:00
                                        </b>
                                    </td>
                                    <td align="center" height={50} width={100}>
                                        <b>
                                            V
                                            <br />
                                            19:00-20:00
                                        </b>
                                    </td>
                                    <td align="center" height={50} width={100}>
                                        <b>
                                            VI
                                            <br />
                                            20:00-22:00
                                        </b>
                                    </td>
                                    <td align="center" height={50} width={100}>
                                        <b>VII<br />22:00</b>
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td align="center" height={50}>
                                        <b>Segunda-feira</b>
                                    </td>
                                    <td align="center" height={50}>Técnico</td>
                                    <td align="center" height={50}>Humanas</td>
                                    <td rowSpan={6} align="center" height={50}>
                                        <h2>
                                            A
                                            <br />
                                            L
                                            <br />
                                            M
                                            <br />
                                            O
                                            <br />
                                            Ç
                                            <br />
                                            O
                                        </h2>
                                    </td>
                                    <td align="center" height={50}>Estudo</td>
                                    <td align="center" height={50}>Treino</td>
                                    <td align="center" height={50}>Janta</td>
                                    <td align="center" height={50}>Descanço/Lazer</td>
                                    <td align="center" height={50}>Dormir</td>
                                </tr>
                                <tr>
                                    <td align="center" height={50}>
                                        <b>Terça-feira</b>
                                    </td>
                                    <td colSpan={3} align="center" height={50}>
                                        Técnico
                                    </td>
                                    <td align="center" height={50}>Estudo</td>
                                    <td align="center" height={50}>Ando de Bike</td>
                                    <td align="center" height={50}>Janta</td>
                                    <td align="center" height={50}>Descanço/Lazer</td>
                                    <td align="center" height={50}>Dormir</td>
                                </tr>
                                <tr>
                                    <td align="center" height={50}>
                                        <b>Quarta-feira</b>
                                    </td>
                                    <td align="center" height={50}>Técnico</td>
                                    <td align="center" height={50}>natureza</td>
                                    <td align="center" height={50}>Estudo</td>
                                    <td align="center" height={50}>Treino</td>
                                    <td align="center" height={50}>Janta</td>
                                    <td align="center" height={50}>Descanço/Lazer</td>
                                    <td align="center" height={50}>Dormir</td>
                                </tr>
                                <tr>
                                    <td align="center" height={50}>
                                        <b>Quinta-feira</b>
                                    </td>
                                    <td align="center" height={50}>Técnico</td>
                                    <td align="center" height={50}>Matemática</td>
                                    <td align="center" height={50}>Estudo</td>
                                    <td align="center" height={50}>Treino</td>
                                    <td align="center" height={50}>Janta</td>
                                    <td align="center" height={50}>Descanço/Lazer</td>
                                    <td align="center" height={50}>Dormir</td>
                                </tr>
                                <tr>
                                    <td align="center" height={50}>
                                        <b>Sexta-feira</b>
                                    </td>
                                    <td align="center" height={50}>Linguagens</td>
                                    <td align="center" height={50}>Técnico</td>
                                    <td align="center" height={50}>Estudo</td>
                                    <td align="center" height={50}>Treino</td>
                                    <td align="center" height={50}>Janta</td>
                                    <td align="center" height={50}>Descanço/Lazer</td>
                                    <td align="center" height={50}>Dormir</td>
                                </tr>
                                <tr>
                                    <td align="center" height={50}>
                                        <b>Sábado</b>
                                    </td>
                                    <td align="center" height={50}>Trabalho</td>
                                    <td align="center" height={50}>Trabalho</td>
                                    <td align="center" height={50}>Treino</td>
                                    <td colSpan={3} align="center" height={50}>
                                        Descanço/Lazer
                                    </td>
                                    <td align="center" height={50}>Dormir</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
