import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import logo_aibox from "../image/logo-aibox.png";
import logo_ness from "../image/ness-logo-website.svg";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid" style={{ overflow: "auto" }}>
          <Cell col={12}>
            <div className="banner-text" style={{ marginBottom: "50px" }}>
              <img className="logo-pic-aibox" src={logo_aibox} alt="logo" />
              <img className="logo-pic-ness" src={logo_ness} alt="logo" />
              <h1>ArtificiLaw</h1>
              <hr />
              <p>
                Ciência de Dados & Inteligência Artificial Aplicada à Processos
                Jurídicos
              </p>
              <div className="social-links">
                {/* Github */}
                <a
                  href="https://github.com/aiboxlab-ness/projects-mod-1-squad-law-1"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-github" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
