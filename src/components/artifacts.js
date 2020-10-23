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
                  Processo de Design Thinking</a></li>
                  {/*<li>RPF</li>
                  <li>Documento de Visão</li>*/}
                </ul>
                <h3><strong>Planejamento</strong></h3>
                <ul>
                <li><a
                  href="https://trello.com/b/jnc8AwH1/artificilaw-produto"
                  rel="noopener noreferrer"
                  target="_blank"
                  >
                  Product Backlog e Kanban</a></li>
                  <li><a
                  href="https://docs.google.com/document/d/1WIe55fPhA2AWm2uOUPTHP0MavaBQUiQ-3xJNtZeQklY/edit?usp=sharing"
                  rel="noopener noreferrer"
                  target="_blank"
                  >
                  História de Usuário</a></li>
                  
                  <li><a
                  href="https://docs.google.com/presentation/d/1dyIoabZVPsR4AHTwQsRHbDsfdfSvTnOSkeKxI47S7bM/edit?usp=sharing"
                  rel="noopener noreferrer"
                  target="_blank"
                  >
                  Revisão Sistemática da Literatura</a></li>
                  <li><a
                  href="https://docs.google.com/presentation/d/1Riv6b6roAszjvI3PlsJKliljrVoDr1MOjXODtMA46lk/edit?usp=sharing"
                  rel="noopener noreferrer"
                  target="_blank"
                  >
                  Apresentação da Primeira Reunião com a PO</a></li>
              
                  <li>Plano de Abertura</li>
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
