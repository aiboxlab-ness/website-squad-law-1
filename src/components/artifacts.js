import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Artifacts extends Component {
  render() {
    return (
      <div className="about-container">
        <Grid style={{ overflow: "auto" }}>
          <Cell className="about-title" col={12}>
            <h1>Artefatos</h1>

          </Cell>

          <Cell
            className="about-cell-2"
            col={8}
            tablet={12}
            phone={12}
            style={{ margin: "auto" }}
          >
           <div className="teste" style={{ textIndent: "-0,5em"}}>
                <h3><strong>Iniciação</strong></h3>
                <ul>
                  <li><a
                  href="https://docs.google.com/presentation/d/1E7OVY5M1qC5f76PQVf0b5ufmW7qANCh33zom1wotOTE/edit?usp=sharing"
                  rel="noopener noreferrer"
                  target="_blank"
                  >
                  Design Thinking</a></li>
                  {/*<li>RPF</li>
                  <li>Documento de Visão</li>*/}
                </ul>
                <h3><strong>Planejamento</strong></h3>
                <ul>
                  <li>Product Backlog</li>
                  <li>Plano de Abertura</li>
                  <li>Kanban</li>
                  <li>Plano de Gerenciamento de Configuração</li>
                </ul>
                <h3><strong>Execução</strong></h3>
                <ul>
                  <li>Documentação da Arquitetura</li>
                  <li>Documento de kickoff</li>
                  <li>Documento de Sprint Planning</li>
                  <li>Resultados de Testes</li>
                </ul>
                <h3><strong>Status Reports Fábrica</strong></h3>
                <ul>
                  <li>Status Report 01</li>
                  <li>Status Report 02</li>
                  <li>Status Report 03</li>
                </ul>
                <h3><strong>Status Reports Negócio</strong></h3>
                <ul>
                  <li>Status Report 01</li>
                  <li>Status Report 02</li>
                </ul>
                <h3><strong>Outros</strong></h3>
                <ul>
                  <li>Mapa de Stakeholders</li>
                  <li>PM Canvas</li>
                  <li>Planilha de métrica e indicadores</li>
                  <li>BSC</li>   
                </ul>              
                <h3><strong>Testes</strong></h3>
                <ul>
                  <li>Plano de testes</li>   
                  <li>Resultado de testes</li>   
                </ul>
                <h3><strong>Demo do Produto</strong></h3>
                <ul>
                  <li>URL:</li>   
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

export default Artifacts;
