import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import "../assets/styles/tools.css";

class Tools extends Component {
  render() {
    return (
      <div className="about-container">
        <Grid style={{ overflow: "auto" }}>
          <Cell className="about-title" col={12}>
            <h1>Ferramentas</h1>
          </Cell>

          <Cell
            className="about-cell-2"
            col={8}
            tablet={12}
            phone={12}
            style={{ margin: "auto" }}
          >
            <div className="teste" style={{ textIndent: "-0,5em"}}>
                <h3><strong>Comunicação</strong></h3>
                <ul>
                  <li>Discord
                  <ul>
                      <li>Comunicação via audio</li>
                    </ul>
                  </li>
                  <li>Whastapp
                  <ul>
                      <li>Comunicação via texto</li>
                    </ul>
                  </li>
                </ul>
                <h3><strong>Gestão</strong></h3>
                <ul>
                  <li><a href="https://trello.com/pt-BR">Trello</a>
                    <ul>
                      <li>Acompanhamento da evolução dos requisitos do projeto.</li>
                    </ul>
                  </li>
                </ul>
                <h3><strong>Controle de versão</strong></h3>
                <ul>
                  <li><a href="https://github.com/">Github</a>
                    <ul>
                      <li>Armazenamento e versionamento de código fonte.</li>
                    </ul>
                  </li>
                </ul>
                <h3><strong>Infraestrutura</strong></h3>
                <ul>
                  <li>Google Cloud Plataform
                    <ul>
                      <li>Servidores de aplicação e armazenamento de dados estáticos.</li>
                    </ul>
                  </li>   
                </ul>
            </div>

            <Cell
              style={{
                width: "100%",
                position: "relative",
              }}
            ></Cell>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Tools;
