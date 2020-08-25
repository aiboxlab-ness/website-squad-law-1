import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class ContactPage extends Component {
  render() {
    return (
      <div className="contact-body" style={{ overflow: "auto" }}>
        <Grid className="contact-grid">
          <Cell col={12}>
            <h2>Contate-nos!</h2>
            <hr style={{ paddingBottom: "2em" }} />

            <h2>Squad Law 1</h2>
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Qualquer dúvida sobre nossos projetos, entre em contato!
            </p>
            <div
              className="contact-list"
              style={{
                width: "30em",
                margin: "auto",
              }}
            ></div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default ContactPage;
