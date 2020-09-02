import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import caio from "../image/caio.png";
import diogo from "../image/diogo.jpeg";
import paulo from "../image/paulo.jpeg";
import richardson from "../image/richardson.jpeg";
import "../assets/styles/roles.css";

class Roles extends Component {
  render() {
    return (
      <div className="about-container">
        <Grid style={{ overflow: "auto" }}>
          <Cell className="about-title" col={12}>
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
                </p>
              </div>
            </div>
            <section id="two" class="wrapper style1 special">
				<div class="inner">
					<header>
						<h2> Equipe</h2>
					</header>
					<div class="flex flex-4">
						<div class="box person">
							<div class="image round">
								<img src={caio} alt="Caio" />
							</div>
							<h3>Caio</h3>
							<p>Engenheiro de Software</p>
						</div>
						<div class="box person">
							<div class="image round">
								<img src={diogo} alt="Diogo" />
							</div>
							<h3>Diogo</h3>
							<p>Engenheiro de Software</p>
						</div>
						<div class="box person">
							<div class="image round">
								<img src={paulo} alt="Paulo" />
							</div>
							<h3>Paulo</h3>
							<p>Engenheiro de Software</p>
						</div>
						<div class="box person">
							<div class="image round">
								<img src={richardson} alt="Richardson" />
							</div>
							<h3>Richardson</h3>
							<p>Engenheiro de Software</p>
						</div>
					</div>
				</div>
			</section>

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

export default Roles;
