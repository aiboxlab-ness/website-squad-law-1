import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Artifacts extends Component {
  render() {
    return (
      <div className="about-container">
        <Grid style={{ overflow: "auto" }}>
          <Cell className="about-title" col={12}>
            <h1>Artefatos</h1>
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
                  O produto é Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
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

export default Artifacts;
