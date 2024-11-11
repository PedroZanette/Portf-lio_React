import '../CssPages/Áreas.css'; // Asegure-se de que seus arquivos de CSS estão no local correto.

const Natureza = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="../index.html">
          <img src="../img/ZanetteLogo.png" width="40" height="40" className="d-inline-block align-top" alt="" />
          Ínicio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="home.html">Home <span className="sr-only"></span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="tecnico.html">Técnico</a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Áreas
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="matematica.html">Matemática</a>
                <a className="dropdown-item" href="humanas.html">Humanas</a>
                <a className="dropdown-item" href="linguagens.html">Linguagens</a>
                <a className="dropdown-item" href="natureza.html">Natureza<span className="sr-only"> (atual)</span></a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="ppe.html">PPE</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                INFO
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="./info/info.html">Informações</a>
                <a className="dropdown-item" href="./info/contatct.html">Contato</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <div className="natureza">
        <h1 style={{ position: "relative", left: "45%", fontSize: "3em", width: "fit-content", height: "fit-content" }}>
          Natureza
        </h1>

        <div style={{ display: "flex", width: "100%", height: "100%", justifyContent: "center", gap: "2rem", padding: "2rem" }}>
          <div className="book">
            <img src="../img/NATUREZA.png" alt="Capa Natureza 1° ano" style={{ width: "20em", height: "18em" }} />
            <div className="cover">
              <p>Capa 1° ano</p>
            </div>
          </div>
          <div className="book-2">
            <img src="../img/Natureza2.png" alt="Capa Natureza 2° ano" style={{ width: "20em", height: "18em" }} />
            <div className="cover">
              <p>Capa 2° ano</p>
            </div>
          </div>
          <div className="book-3">
            <img src="../img/Natureza3.png" alt="Capa Natureza 3° ano" style={{ width: "20em", height: "18em" }} />
            <div className="cover">
              <p>Capa 3° ano</p>
            </div>
          </div>
        </div>

        <div style={{ width: "98.6vw", backgroundColor: "black", color: "white" }}>
          <h1 style={{ position: "relative", left: "43%", fontSize: "3em", width: "fit-content" }}>1° Trimestre</h1>
        </div>

        {/* Atividades */}
        <div className="atividade-h">
          <p>
            <a style={{ textDecoration: "none" }} href="https://classroom.google.com/c/NjI4MjE4MDIwMzc1/a/NjY2NjIzODc5OTYw/details">
              NATUREZA - 06/03 - EVOLUCIONISMO
            </a>
          </p>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "30em",
              paddingTop: "0em",
              paddingBottom: "0",
              marginTop: "0em",
              overflow: "hidden",
              borderRadius: "8px",
              willChange: "transform",
            }}
          >
            <iframe
              loading="lazy"
              style={{
                position: "absolute",
                width: "70%",
                height: "100%",
                top: "0",
                left: "13em",
                border: "none",
                padding: "0em",
                margin: "0",
              }}
              src="https://www.canva.com/design/DAF-vvLklWo/jyT6LP4KPS0K9lIGfVWYgA/view?embed"
              allowFullScreen
            />
          </div>
          <p style={{ padding: "2em", paddingBottom: "0px", fontSize: "2em" }}>Competências e habilidades: C2 - H11</p>
          <p style={{ padding: "2em", fontSize: "1.4em" }}>
            Objetivo: Criar um meme sobre evolucionismo.
            <br />
            Assunto: Na aula em questão foi estudadoas ideias evolucionistas, os principais cientistas que trabalharam
            nessa área e alguns conceitos dentro do evolucionismo.
            <br />
            Opnião: Essa atividade achei legal e difícil de fazer pois a idéia da atividade em si é muito legal e
            divertida, porem o problema é minha falta de criatividade para essa atividade, mas quando pensei em algo
            achei que ficou bom.
          </p>
        </div>

        {/* Continue as outras atividades... */}

      </div>
    </div>
  );
};

export default Natureza;
