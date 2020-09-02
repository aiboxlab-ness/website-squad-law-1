import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import mindmap from "../image/mind_map.png";

class Product extends Component {
  render() {
    return (
      <div className="about-container">
        <Grid style={{ overflow: "auto" }}>
          <Cell className="about-title" col={12}>
            <h1>JudLaw</h1>

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
                 O JudLaw é um serviço com inteligência artificial integrado e personalizado, que utiliza técnicas de mineração e aprendizado de máquina para extrarir informações e categorizar petições.
                 Visa suprir a necessidade dos escritórios de advocacia de ler e obter informações das petições iniciais, de forma que minimize os erros humanos, tanto na categorização quanto de digitação.
                 O JudLaw também leva em consideração o contexto em que o cliente está inserido; por exemplo identificando quais os domínios jurídicos da petição (e.g. civil, criminal, etc.)
                </p>
              </div>
              <img src={mindmap} alt="mind map" style={{ width:"100%", margin: "auto"}} />
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

export default Product;
