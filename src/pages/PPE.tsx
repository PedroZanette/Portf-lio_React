import './CssPages/Home.css';
import Navbar from '../components/Navbar';
import Certificado from '../img/Certificado_Estrutura.pdf'

const PPE = () => {
  return (
    <div>
      <Navbar/>
      <h1 style={{ fontSize: '500%', textAlign: 'center' }}>PPE</h1>

      <div style={{ width: '98.6vw', backgroundColor: 'black', color: 'white' }}>
        <h1 style={{ position: 'relative', left: '43%', fontSize: '3em', width: 'fit-content' }}>
          PPE de Natureza
        </h1>
      </div>

      <div className="atividade-h">
        <p>
          <a
            style={{ textDecoration: 'none', fontSize: "2em", padding: "2em" }}
            href="https://aprendamais.mec.gov.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Certificado de curso da plataforma MEC - Estrutura de Dados
          </a>
        </p>

        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '30em',
            overflow: 'hidden',
            borderRadius: '8px',
            willChange: 'transform',
          }}
        >
          <iframe
            loading="lazy"
            style={{
              position: 'absolute',
              width: '70%',
              height: '100%',
              top: 0,
              left: '13em',
              border: 'none',
            }}
            src={Certificado}
            title="Certificado Estrutura de Dados"
            allowFullScreen
          />
        </div>

        <p style={{ padding: '2em', paddingBottom: '0px', fontSize: '2em' }}>
          Competências e habilidades: Desconhecido.
        </p>
        <p style={{ padding: '2em', fontSize: '1.4em' }}>
          Objetivo: Escolher e realizar um curso na plataforma MEC
          <br />
          Assunto: Estrutura de Dados
          <br />
          Opinião: Foi um curso legal de se fazer, ainda pude aprender novos conteúdos e reforçar o que eu já sabia, recomendo
          fazer quem ainda não fez e tem interesse na área de tecnologia, o curso é rápido e bem objetivo.
        </p>
      </div>
    </div>
  );
};

export default PPE;
