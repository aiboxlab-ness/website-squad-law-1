import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class AboutPage extends Component {
  render() {
    return (
      <div className="about-container">
        <Grid style={{ overflow: "auto" }}>
          <Cell className="about-title" col={12}>
            <h1>Então quem somos?</h1>
            <h3>...</h3>
          </Cell>

          <Cell
            className="about-cell-2"
            col={8}
            tablet={12}
            phone={12}
            style={{ margin: "auto" }}
          >
            <div style={{ textIndent: "2em" }}>
              <div style={{ textIndent: "2em" }}>
                <p>
                  O curso usará a metodologia de Aprendizagem Baseada em
                  Problemas (PBL, do inglês Problem-Based Learning). O PBL
                  sugere o uso de situações reais em ambientes de aprendizagem,
                  o que ao mesmo tempo motiva os estudantes e melhora a
                  transferência de conhecimento teórico para situações reais. As
                  aulas serão quinzenais na sexta a noite (18:30-21:30) e no
                  sábado o dia todo (8:00-12:00 e 13:00-17:00).
                </p>
              </div>
              <div style={{ textIndent: "2em" }}>
                <p></p>
              </div>
            </div>

            <div className="components">
              <div className="squad-component">
                <img
                  className="about-profile-pic"
                  src="https://image.freepik.com/vetores-gratis/homem-negocios-perfil-caricatura_18591-58479.jpg"
                  alt="profile"
                />
                <h3>Integrante 1</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              <div className="squad-component">
                <img
                  className="about-profile-pic"
                  src="https://image.freepik.com/vetores-gratis/homem-negocios-perfil-caricatura_18591-58479.jpg"
                  alt="profile"
                />
                <h3>Integrante 2</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              <div className="squad-component">
                <img
                  className="about-profile-pic"
                  src="https://image.freepik.com/vetores-gratis/homem-negocios-perfil-caricatura_18591-58479.jpg"
                  alt="profile"
                />
                <h3>Integrante 3</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="squad-component">
                <img
                  className="about-profile-pic"
                  src="https://image.freepik.com/vetores-gratis/homem-negocios-perfil-caricatura_18591-58479.jpg"
                  alt="profile"
                />
                <h3>Integrante 4</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>

            <Cell
              style={{
                width: "100%",
                height: "500px",
                position: "relative",
              }}
            ></Cell>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default AboutPage;
